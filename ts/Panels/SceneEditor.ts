/// <reference path="Panel.ts"/>

var detailsHtml = Fabrique.Debug['ts/Templates/details.hbs'];
var panelHtml = Fabrique.Debug['ts/Templates/panel.hbs'];
var treeHtml = Fabrique.Debug['ts/Templates/tree.hbs'];

Handlebars.registerPartial('sceneDetails', detailsHtml);
Handlebars.registerPartial('sceneTree', treeHtml);
Handlebars.registerHelper('typeString', typeToString);
Handlebars.registerHelper('listItemOpen', listItemOpen);
Handlebars.registerHelper('getId', getObjectId);

module Fabrique {
    export module Debug {
        export class SceneEditor extends Fabrique.Debug.Panel {
            private tree;
            private details;
            private refresh;
            private selected;
            private debugRenderer: Phaser.Game;

            private debugItem: PIXI.DisplayObject;

            constructor(game:Phaser.Game, parent:Fabrique.Plugins.Debug) {
                super(game, parent);

                this.name = 'scene';
                this.title = 'Scene Editor';

                this.debugRenderer = new Phaser.Game(game.width, game.height, Phaser.CANVAS, '', {render: () => this.render()}, true);
                this.debugRenderer.canvas.id = 'debug-render';
            }

            public static onPositionChange(id: number, axis: string) {
                var input: HTMLInputElement = <HTMLInputElement>document.getElementById('input-' + id + '-' + axis);
                var ele: PIXI.DisplayObject = _cache[id];

                ele[axis] = input.value;
            }

            public static onScaleChange(id: number, axis: string) {
                var input: HTMLInputElement = <HTMLInputElement>document.getElementById('input-' + id + '-scale-' + axis);
                var ele: PIXI.DisplayObject = _cache[id];

                ele.scale[axis] = input.value;
            }

            public static onAlphaChange(id: number) {
                var input: HTMLInputElement = <HTMLInputElement>document.getElementById('input-' + id + '-alpha');
                var ele: PIXI.DisplayObject = _cache[id];

                ele.alpha = parseFloat(input.value);
            }

            public createPanelElement(): HTMLElement {
                Panel.prototype.createPanelElement.call(this);

                this.panel.innerHTML = panelHtml(this.game.stage);

                this.tree = this.panel.querySelector('.sidebar');
                this.details = this.panel.querySelector('.details');
                this.refresh = this.panel.querySelector('.refresh');

                Ui.on(this.tree, 'click', 'li', this._onLiClick.bind(this));
                Ui.on(this.refresh, 'click', '', this._onRefreshClick.bind(this));

                return this.panel;
            }

            public rebuildTree() {
                Ui.empty(this.tree);

                _cache = {};

                this.tree.innerHTML = treeHtml(this.game.stage);

                this.select(this.tree.querySelector('li:first-child'));
                Ui.addClass(this.selected, 'expanded');

                this.reloadDetails();
            }

            public reloadDetails() {
                var id = this.selected.dataset.id;

                this.details.innerHTML = detailsHtml(_cache[id]);

                this.debugItem = _cache[id];

                // this.details.appendChild(this.renderer.view);

                // this.renderer.renderDisplayObject(_cache[id]);
            }

            public render() {
                if (this.debugItem instanceof Phaser.Sprite) {
                    this.game.debug.spriteBounds(this.debugItem);
                    //this.game.debug.spriteInfo(<Phaser.Sprite>this.debugItem, 10, 10);
                } else {
                    this.game.debug.reset();
                }
            }

            public select(li) {
                if (this.selected) {
                    Ui.removeClass(this.selected, 'selected');
                }

                this.selected = li;
                Ui.addClass(this.selected, 'selected');
            }

            public show() {
                this.rebuildTree();

                Panel.prototype.show.call(this);
            }

            public destroy() {
                super.destroy();

                this.tree = null;
                this.details = null;
                this.refresh = null;
            }

            public _onLiClick(e) {
                e.stopPropagation();

                this.select(e.delegateTarget);

                Ui.toggleClass(e.delegateTarget, 'expanded');

                this.reloadDetails();
            }

            public _onRefreshClick(e) {
                e.preventDefault();
                e.stopPropagation();

                this.rebuildTree();
            }

        }
    }
}

//require templates
var _cache = {},
    _id = 0;

function listItemOpen() {
    _cache[++_id] = this;
    this._id = _id;

    return new Handlebars.SafeString(
        '<li ' + (this.children && this.children.length ? 'class="has-children" ' : '') + 'data-id="' + _id + '">'
    );
}

function getObjectId() {
    return this._id;
}

function typeToString() {
    var node = this;

    // If no phaser type defined, try to guess
    if (node.type === undefined) {
        // Phaser.Stage does not have its 'type' property defined, so check here.
        if (node instanceof Phaser.Stage) {
            return 'Stage';
        }
        // PIXI.Stage was removed in Phaser 2.4.4, so make sure it's defined first.
        else if (typeof PIXI.Stage !== 'undefined' &&
            node instanceof PIXI.Stage) {
            return 'PIXI Stage';
        }
        else if (node instanceof PIXI.Sprite) {
            return 'PIXI Sprite';
        }
        else if (node instanceof PIXI.DisplayObjectContainer) {
            return 'PIXI DisplayObjectContainer';
        }
        else if (node instanceof PIXI.DisplayObject) {
            return 'PIXI DisplayObject';
        }
        else {
            return 'Unknown';
        }
    }
    // return a string for the phaser type
    else {
        switch (node.type) {
            case Phaser.SPRITE:
                return 'Sprite';

            case Phaser.BUTTON:
                return 'Button';

            case Phaser.IMAGE:
                return 'Image';

            case Phaser.GRAPHICS:
                return 'Graphics';

            case Phaser.TEXT:
                return 'Text';

            case Phaser.TILESPRITE:
                return 'Tile Sprite';

            case Phaser.BITMAPTEXT:
                return 'Bitmap Text';

            case Phaser.GROUP:
                return 'Group';

            case Phaser.RENDERTEXTURE:
                return 'Render Texture';

            case Phaser.TILEMAP:
                return 'Tilemap';

            case Phaser.TILEMAPLAYER:
                return 'Tilemap Layer';

            case Phaser.EMITTER:
                return 'Emitter';

            case Phaser.POLYGON:
                return 'Polygon';

            case Phaser.BITMAPDATA:
                return 'Bitmap Data';

            case Phaser.CANVAS_FILTER:
                return 'Canvas Filter';

            case Phaser.WEBGL_FILTER:
                return 'WebGL Filter';

            case Phaser.ELLIPSE:
                return 'Ellipse';

            case Phaser.SPRITEBATCH:
                return 'Sprite Batch';

            case Phaser.RETROFONT:
                return 'Retro Font';

            case Phaser.POINTER:
                return 'Pointer';

            case Phaser.ROPE:
                return 'Rope';

            default:
                return 'Unknown';
        }
    }
}
