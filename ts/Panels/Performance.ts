module Fabrique {
    export module Debug {
        export class Performance extends Fabrique.Debug.Panel {
            public eventQueue: any[] = [];

            public graph: Graph;

            public colorPalettes: {default: string[]};

            constructor(game:Phaser.Game, parent: Fabrique.Plugins.Debug) {
                super (game, parent);


                this.name = 'performance';
                this.title = 'Performance';
                this.eventQueue = [];

                this.graph = null;

                this.colorPalettes = {
                    default: [
                        // Colors from: https://github.com/highslide-software/highcharts.com/blob/master/js/themes/grid.js
                        '#058DC7', '#50B432', '#ED561B', '#DDDF00',
                        '#24CBE5', '#64E572', '#FF9655', '#FFF263',
                        '#6AF9C4',
                        // Colors from: https://github.com/highslide-software/highcharts.com/blob/master/js/themes/dark-unica.js
                        '#2b908f', '#90ee7e', '#f45b5b', '#7798BF',
                        '#aaeeee', '#ff0066', '#eeaaee',
                        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
                    ]
                };
            }


            public createPanelElement() {
                var elm = Panel.prototype.createPanelElement.call(this);

                this.graph = new Graph(elm, window.innerWidth - 20, 256, this.colorPalettes.default);

                return elm;
            }

            public update() {
                this.graph.addData(this.parent.timings, this.eventQueue.shift());
            }

            public mark(label) {
                this.eventQueue.push(label);
            }

            public destro () {
                Panel.prototype.destroy.call(this);

                this.graph.destroy();

                this.eventQueue = null;
                this.graph = null;
                this.colorPalettes = null;
            }

        }
    }
}