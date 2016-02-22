import MatchableElement = Fabrique.MatchableElement;

var scriptSource = (() => {
    var scripts:any = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];

    var src: string;
    if ((<any>script).getAttribute.length !== undefined) {
        src = (<any>script).src;
    } else {
        src = (<any>script).getAttribute('src', -1);
    }


    return src.slice(0, src.lastIndexOf('/') + 1);
})();

module Fabrique {
    export interface MatchableElement extends HTMLElement {
        matches: (selector: string) => boolean;
        webkitMatchesSelector: (selector: string) => boolean;
        mozMatchesSelector: (selector: string) => boolean;
        msMatchesSelector: (selector: string) => boolean;
        oMatchesSelector: (selector: string) => boolean;
        parentElement: MatchableElement;
    }
    export interface DelegateEvent extends Event {
        delegateTarget: MatchableElement;
    }

    export class Ui {
        public static addClass(dom: HTMLElement, cls: string) {
            var classes = dom.className.split(' ');

            classes.push(cls);
            dom.className = classes.join(' ').trim();
        }

        public static setText(dom: HTMLElement, txt: string, somehting?: any) {
            dom.textContent = txt
        }

        public static setStyle(dom: HTMLElement, style: string|string[], value: string) {
            if(typeof style === 'string') {
                dom.style[style] = value;
            } else {
                for(var key in style) {
                    dom.style[key] = style[key];
                }
            }
        }

        public static addCss(cssUrl: string) {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', scriptSource + cssUrl);
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        public static delegate(dom:HTMLElement, evt:string, selector:string, fn:(e:DelegateEvent) => void) {
            dom.addEventListener(evt, function (e:DelegateEvent) {
                var target: MatchableElement = <MatchableElement>e.target;
                window['target'] = target;
                if (e.target && target.matches(selector)) {
                    e.delegateTarget = target;

                    if (fn) {
                        fn(e);
                    }
                }
                else if (target.parentElement && target.parentElement.matches(selector)) {
                    e.delegateTarget = target.parentElement;

                    if (fn) {
                        fn(e);
                    }
                }
            });
        }

        public static on(dom:HTMLElement, evt:string, delegate:string, fn:(e: Event) => void) {
            if (delegate) {
                return Ui.delegate(dom, evt, delegate, fn);
            }

            dom.addEventListener(evt, fn);
        }

        public static removeClass(dom:HTMLElement, cls:string) {
            var classes = dom.className.split(' '),
                i = classes.indexOf(cls);

            if (i !== -1) {
                classes.splice(i, 1);
                dom.className = classes.join(' ').trim();
            }
        }

        public static hasClass(dom: HTMLElement, cls: string) {
            return dom.className.split(' ').indexOf(cls) !== -1;
        }

        public static toggleClass(dom: HTMLElement, cls: string) {
            if (Ui.hasClass(dom, cls)) {
                Ui.removeClass(dom, cls);
            } else {
                Ui.addClass(dom, cls);
            }
        }

        public static setHtml(dom: HTMLElement, html: string) {
            dom.innerHTML = html;
        }

        public static empty(dom: HTMLElement) {
            while (dom.firstChild) {
                dom.removeChild(dom.firstChild);
            }
        }

        public static show(dom: HTMLElement) {
            Ui.setStyle(dom, 'display', 'block');
        }

        public static hide(dom: HTMLElement) {
            Ui.setStyle(dom, 'display', 'none');
        }

        public static clear() {
            var br = document.createElement('br');
            Ui.setStyle(br, 'clear', 'both');

            return br;
        }
    }
}

// polyfill for matchesSelector
if (!(<MatchableElement>HTMLElement.prototype).matches) {
    var htmlprot: MatchableElement = <MatchableElement>HTMLElement.prototype;

    htmlprot.matches =
        htmlprot.matches ||
        htmlprot.webkitMatchesSelector ||
        htmlprot.mozMatchesSelector ||
        htmlprot.msMatchesSelector ||
        htmlprot.oMatchesSelector ||
        function (selector) {
            // poorman's polyfill for matchesSelector
            var elements = this.parentElement.querySelectorAll(selector),
                element,
                i = 0;

            while (element = elements[i++]) {
                if (element === this) {
                    return true;
                }
            }

            return false;
        };
}


if (game !== undefined && game.plugins !== undefined) {
    Phaser.Device.whenReady(() => {
        game.plugins.add(Fabrique.Plugins.Debug);
    });
}


