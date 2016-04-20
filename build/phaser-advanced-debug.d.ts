declare module Fabrique {
    module Plugins {
        interface RenderSession extends PIXI.RenderSession {
            drawCount: number;
        }
        interface FixedCanvasRenderer extends PIXI.CanvasRenderer {
            renderSession: RenderSession;
        }
        interface FixedWebGLRenderer extends PIXI.WebGLRenderer {
            renderSession: RenderSession;
        }
        interface FixedGame extends Phaser.Game {
            renderer: FixedCanvasRenderer | FixedWebGLRenderer;
        }
        interface Stats {
            ms: HTMLSpanElement;
            fps: HTMLSpanElement;
            dpf: HTMLSpanElement;
            ent: HTMLSpanElement;
        }
        interface Panels {
            performance: Fabrique.Debug.Performance;
            bezier: Fabrique.Debug.BezierTester;
            scene: Fabrique.Debug.SceneEditor;
        }
        class Debug extends Phaser.Plugin {
            panels: Panels;
            tickTimings: {
                lastStart: number;
                start: number;
                ms: number;
            };
            timings: {
                preUpdate: {
                    physics: number;
                    state: number;
                    plugins: number;
                    stage: number;
                };
                update: {
                    state: number;
                    stage: number;
                    tweens: number;
                    sound: number;
                    input: number;
                    physics: number;
                    particles: number;
                    plugins: number;
                };
                postUpdate: {
                    stage: number;
                    plugins: number;
                };
                preRender: {
                    state: number;
                };
                render: {
                    renderer: number;
                    plugins: number;
                    state: number;
                };
                postRender: {
                    plugins: number;
                };
            };
            private container;
            private bar;
            private stats;
            game: FixedGame;
            timer: Performance | DateConstructor;
            constructor(game: FixedGame, parent: PIXI.DisplayObject);
            /**
             * Post-Update is called after all the update methods have already been called, but before the render calls.
             * It is only called if active is set to true.
             *
             * @method Phaser.Plugin.Debug#postUpdate
             */
            postUpdate(): void;
            /**
             * Marks a point on the performance graph with a label to help you corrolate events and timing on the graph
             *
             * @method Phaser.Plugin.Debug#mark
             */
            mark(label: any): void;
            destroy(): void;
            private wrap(obj, component, method, timingStat?);
            private bindEvents();
            private createElement();
            private createMenuHead();
            private createMenuStats();
        }
    }
}
declare module Fabrique {
    module Debug {
        class Panel {
            game: Phaser.Game;
            parent: Fabrique.Plugins.Debug;
            name: string;
            title: string;
            active: boolean;
            menuItem: HTMLAnchorElement;
            protected panel: HTMLElement;
            constructor(game: Phaser.Game, parent: Fabrique.Plugins.Debug);
            createPanelElement(): HTMLElement;
            createMenuElement(): HTMLAnchorElement;
            toggle(): void;
            show(): void;
            hide(): void;
            destroy(): void;
        }
    }
}
declare module Fabrique {
    module Debug {
        class BezierTester extends Fabrique.Debug.Panel {
            private static BLANK;
            private static COLORS;
            private static POS;
            private points;
            private object;
            private activeTween;
            private graphics;
            private animationSpeed;
            private originalX;
            private originalY;
            constructor(game: Phaser.Game, parent: Fabrique.Plugins.Debug);
            createPanelElement(): any;
            destroy(): void;
            testObject(object: Phaser.Image | Phaser.Sprite, animationSpeed?: number): void;
            private dragStart();
            private dragStop();
            private dragUpdate();
        }
    }
}
declare module Fabrique {
    module Debug {
        class Performance extends Fabrique.Debug.Panel {
            eventQueue: any[];
            graph: Graph;
            colorPalettes: {
                default: string[];
            };
            constructor(game: Phaser.Game, parent: Fabrique.Plugins.Debug);
            createPanelElement(): any;
            update(): void;
            mark(label: any): void;
            destro(): void;
        }
    }
}
declare module Fabrique {
    module Debug {
        var Templates: any;
    }
}
declare var detailsHtml: any;
declare var panelHtml: any;
declare var treeHtml: any;
declare module Fabrique {
    module Debug {
        class SceneEditor extends Fabrique.Debug.Panel {
            private tree;
            private details;
            private refresh;
            private selected;
            private debugRenderer;
            private debugItem;
            constructor(game: Phaser.Game, parent: Fabrique.Plugins.Debug);
            static onPositionChange(id: number, axis: string): void;
            static onScaleChange(id: number, axis: string): void;
            static onAlphaChange(id: number): void;
            createPanelElement(): HTMLElement;
            rebuildTree(): void;
            reloadDetails(): void;
            toggle(): void;
            render(): void;
            select(li: any): void;
            show(): void;
            destroy(): void;
            _onLiClick(e: any): void;
            _onRefreshClick(e: any): void;
        }
    }
}
declare var _cache: {}, _id: number;
declare function listItemOpen(): hbs.SafeString;
declare function getObjectId(): any;
declare function typeToString(): string;
declare module Fabrique {
    module Debug {
        interface GraphOptions {
            maxValue?: number;
            labelPadding?: number;
            lineWidth?: number;
        }
        class Graph {
            private canvas;
            private ctx;
            private labelStyle;
            private maxValue;
            private padding;
            private dataLineWidth;
            private legendWidth;
            private legendBoxSize;
            private legendIndent;
            private colors;
            private dataCanvas;
            private dctx;
            private dataCanvasBuffer;
            private bctx;
            private eventY;
            constructor(container: HTMLElement, width: number, height: number, colors: string[], options?: GraphOptions);
            addData(values: any, events: any): void;
            drawBg(): void;
            drawLegend(values: any): void;
            drawData(values: any, event: any): void;
            destroy(): void;
        }
    }
}
import MatchableElement = Fabrique.MatchableElement;
declare var scriptSource: string;
declare module Fabrique {
    interface MatchableElement extends HTMLElement {
        matches: (selector: string) => boolean;
        webkitMatchesSelector: (selector: string) => boolean;
        mozMatchesSelector: (selector: string) => boolean;
        msMatchesSelector: (selector: string) => boolean;
        oMatchesSelector: (selector: string) => boolean;
        parentElement: MatchableElement;
    }
    interface DelegateEvent extends Event {
        delegateTarget: MatchableElement;
    }
    class Ui {
        static addClass(dom: HTMLElement, cls: string): void;
        static setText(dom: HTMLElement, txt: string, somehting?: any): void;
        static setStyle(dom: HTMLElement, style: string | string[], value: string): void;
        static addCss(cssUrl: string): void;
        static delegate(dom: HTMLElement, evt: string, selector: string, fn: (e: DelegateEvent) => void): void;
        static on(dom: HTMLElement, evt: string, delegate: string, fn: (e: Event) => void): void;
        static removeClass(dom: HTMLElement, cls: string): void;
        static hasClass(dom: HTMLElement, cls: string): boolean;
        static toggleClass(dom: HTMLElement, cls: string): void;
        static setHtml(dom: HTMLElement, html: string): void;
        static empty(dom: HTMLElement): void;
        static show(dom: HTMLElement): void;
        static hide(dom: HTMLElement): void;
        static clear(): HTMLBRElement;
    }
}
