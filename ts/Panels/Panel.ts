module Fabrique {
    export module Debug {
        export class Panel {
            public game:Phaser.Game;
            public parent:Fabrique.Plugins.Debug;

            public name:string = '';
            public title:string = '';
            public active:boolean = false;
            public menuItem:HTMLAnchorElement;

            private panel:HTMLElement;

            constructor(game:Phaser.Game, parent: Fabrique.Plugins.Debug) {
                this.game = game;
                this.parent = parent;
            }

            //builds the html for a panel
            public createPanelElement() {
                var elm = this.panel = document.createElement('div');
                Ui.addClass(elm, 'pdebug-panel ' + this.name);

                return elm;
            };

            //builds the html for this panels menu item
            public createMenuElement() {
                var elm = this.menuItem = document.createElement('a');

                elm.href = '#' + this.name;

                Ui.addClass(elm, 'pdebug-menu-item ' + this.name);
                Ui.setText(elm, this.title);

                return elm;
            };

            public toggle() {
                if (this.active) {
                    this.hide();
                } else {
                    this.show();
                }
            };

            public show() {
                this.active = true;
                Ui.setStyle(this.panel, 'display', 'block');
            };

            public hide() {
                this.active = false;
                Ui.setStyle(this.panel, 'display', 'none');
            };

            public destroy() {
                this.game = null;
                this.parent = null;

                this.name = null;
                this.title = null;
                this.active = null;

                this.panel = null;
            };
        }
    }
}
