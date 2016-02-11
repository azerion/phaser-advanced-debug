module Fabrique {
    export module Plugins {
        export interface RenderSession extends PIXI.RenderSession {
            drawCount: number;
        }
        export interface FixedCanvasRenderer extends PIXI.CanvasRenderer {
            renderSession: RenderSession;
        }
        export interface FixedWebGLRenderer extends PIXI.WebGLRenderer {
            renderSession: RenderSession;
        }
        export interface FixedGame extends Phaser.Game {
            renderer: FixedCanvasRenderer|FixedWebGLRenderer;
        }

        export interface Stats {
            ms: HTMLSpanElement;
            fps: HTMLSpanElement;
            dpf: HTMLSpanElement;
            ent: HTMLSpanElement;
        }

        export interface Panels {
            performance: Fabrique.Debug.Performance;
            //scene: Fabrique.Debug.Scene;
        }

        export class Debug extends Phaser.Plugin {
            public panels: Panels = {
                performance: null
                //scene: null
            };

            public tickTimings = {
                lastStart: 0,
                start: 0,
                ms: 0
            };

            public timings = {
                preUpdate: {
                    physics: 0,
                    state: 0,
                    plugins: 0,
                    stage: 0
                },
                update: {
                    state: 0,
                    stage: 0,
                    tweens: 0,
                    sound: 0,
                    input: 0,
                    physics: 0,
                    particles: 0,
                    plugins: 0
                },
                postUpdate: {
                    stage: 0,
                    plugins: 0
                },
                preRender: {
                    state: 0
                },
                render: {
                    renderer: 0,
                    plugins: 0,
                    state: 0
                },
                postRender: {
                    plugins: 0
                }
            };

            private container: HTMLDivElement = null;
            private bar: HTMLDivElement = null;

            private stats: Stats = {
                ms: null,
                fps: null,
                dpf: null,
                ent: null
            };

            public game: FixedGame;

            public timer = (window.performance ? window.performance : Date);

            constructor(game:FixedGame, parent:PIXI.DisplayObject) {
                super(game, parent);

                // create the panels
                this.panels.performance = new Fabrique.Debug.Performance(this.game, this);
                //this.panels.scene = new Fabrique.Debug.Scene(this.game, this);

                // add elements to the page
                //Ui.addCss(css);
                document.body.appendChild(this.createElement());

                this.bindEvents();

                // wrap each component's update methods so we can time them
                for (var method in this.timings) {
                    for (var comp in this.timings[method]) {
                        this.wrap(this.game, comp, method, comp);
                    }
                }

                // wrap the game update method
                this.wrap(this, 'game', 'update');

                // initialize each panel
                for (var p in this.panels) {
                    if (this.panels[p].init) {
                        this.panels[p].init.apply(this.panels[p], arguments);
                    }
                }
            }


            /**
             * Post-Update is called after all the update methods have already been called, but before the render calls.
             * It is only called if active is set to true.
             *
             * @method Phaser.Plugin.Debug#postUpdate
             */
            public postUpdate() {
                for (var p in this.panels) {
                    if (this.panels[p].update && this.panels[p].active) {
                        this.panels[p].update();
                    }
                }

                var fps = Math.round(1000 / (this.tickTimings.start - this.tickTimings.lastStart)),
                    dpf = this.game.renderer.renderSession.drawCount;

                fps = fps > 60 ? 60 : fps;

                // update stats indicators
                Ui.setText(<HTMLElement>this.stats.dpf.firstElementChild, dpf === undefined ? '(N/A)' : dpf.toString());
                Ui.setText(<HTMLElement>this.stats.ms.firstElementChild, (Math.round(this.tickTimings.ms)).toString());
                Ui.setText(<HTMLElement>this.stats.fps.firstElementChild, (Math.round(fps)).toString());
            };

            /**
             * Marks a point on the performance graph with a label to help you corrolate events and timing on the graph
             *
             * @method Phaser.Plugin.Debug#mark
             */
            public mark(label) {
                if (this.panels.performance) {
                    this.panels.performance.mark(label);
                }
            };

            public destroy() {
                Phaser.Plugin.prototype.destroy.call(this);

                for (var p in this.panels) {
                    this.panels[p].destroy();
                }

                this.panels = null;
                this.tickTimings = null;
                this.timings = null;

                this.container = null;
                this.bar = null;
                this.stats = null;

                this.timer = null;
            };

            private wrap(obj, component, method, timingStat?) {
                if (!obj[component] || !obj[component][method]) {
                    return;
                }

                obj[component][method] = (function (self, name, method, stat, fn) {
                    var start = 0,
                        end = 0;

                    // special tick capture for game update
                    if (name === 'game' && method === 'update' && !stat) {
                        return function () {
                            start = self.timer.now();

                            self.tickTimings.lastStart = self.tickTimings.start;
                            self.tickTimings.start = start;

                            fn.apply(this, arguments);

                            end = self.timer.now();

                            self.tickTimings.ms = end - start;
                        };
                    }
                    else {
                        return function () {
                            start = self.timer.now();

                            fn.apply(this, arguments);

                            end = self.timer.now();

                            self.timings[method][stat] = end - start;
                        };
                    }
                })(this, component, method, timingStat, obj[component][method]);
            };

            private bindEvents() {
                var activePanel;

                Ui.on(this.bar, 'click', '.pdebug-menu-item', (e: Event) => {
                    e.preventDefault();

                    var panel = this.panels[(<HTMLAnchorElement>e.target).getAttribute('href').replace('#', '')];

                    if (!panel) {
                        return;
                    }

                    if (activePanel) {
                        activePanel.toggle();
                        Ui.removeClass(activePanel.menuItem, 'active');

                        if (activePanel.name === panel.name) {
                            activePanel = null;
                            return;
                        }
                    }

                    Ui.addClass(<HTMLElement>e.target, 'active');
                    panel.toggle();
                    activePanel = panel;
                });
            };

            private createElement() {
                var c = this.container = document.createElement('div'),
                    bar = this.bar = document.createElement('div');

                //container
                Ui.addClass(c, 'pdebug');
                c.appendChild(bar);

                //the menu bar
                Ui.addClass(bar, 'pdebug-menu');
                bar.appendChild(this.createMenuHead());
                bar.appendChild(this.createMenuStats());

                //add the panels
                for (var p in this.panels) {
                    bar.appendChild(this.panels[p].createMenuElement());
                    c.appendChild(this.panels[p].createPanelElement());
                }

                return c;
            };

            private createMenuHead() {
                var div = document.createElement('span'),
                    r = this.game.renderType,
                    type = (r === Phaser.WEBGL ? 'WebGL' : (r === Phaser.HEADLESS ? 'Headless' : 'Canvas'));

                Ui.addClass(div, 'pdebug-head');
                Ui.setText(div, 'Phaser Debug (' + type + '):');

                return div;
            };

            private createMenuStats() {
                var div = document.createElement('div');

                Ui.addClass(div, 'pdebug-stats');

                this.stats.ms = document.createElement('span');
                this.stats.fps = document.createElement('span');
                this.stats.dpf = document.createElement('span');
                // this.stats.ent = document.createElement('span');

                Ui.addClass(this.stats.ms, 'pdebug-stats-item ms');
                Ui.setHtml(this.stats.ms, '<span>0</span> ms');
                div.appendChild(this.stats.ms);

                Ui.addClass(this.stats.fps, 'pdebug-stats-item fps');
                Ui.setHtml(this.stats.fps, '<span>0</span> fps');
                div.appendChild(this.stats.fps);

                Ui.addClass(this.stats.dpf, 'pdebug-stats-item dpf');
                Ui.setHtml(this.stats.dpf, '<span>0</span> draws');
                div.appendChild(this.stats.dpf);

                // ui.addClass(this.stats.ent, 'pdebug-stats-item ent');
                // ui.setHtml(this.stats.ent, '<span>0</span> entities');
                // div.appendChild(this.stats.ent);

                return div;
            };
        }
    }
}