module Fabrique {
    export module Debug {
        export class Scene extends Fabrique.Debug.Panel {
            constructor(game:Phaser.Game, parent: Fabrique.Plugins.Debug) {
                super(game, parent);
            }
        }
    }
}