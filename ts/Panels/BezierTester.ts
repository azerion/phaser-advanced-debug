/// <reference path="Panel.ts"/>
module Fabrique {
    export module Debug {
        export class BezierTester extends Fabrique.Debug.Panel {

            constructor(game:Phaser.Game, parent: Fabrique.Plugins.Debug) {
                super (game, parent);

                this.name = 'bezier';
                this.title = 'Bezier Tester';
            }


            public createPanelElement() {
                var elm = Panel.prototype.createPanelElement.call(this);

                return elm;
            }
            public destroy () {
                super.destroy();
            }

        }
    }
}