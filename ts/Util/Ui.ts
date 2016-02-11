module Fabrique {
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

        public static addCss(css: string) {
            var style: HTMLStyleElement = document.createElement('style');

            style.type = 'text/css';

            if (style.sheet){
                style.sheet.href = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.head.appendChild(style);
        }

        public static delegate(dom:HTMLElement, evt:string, selector:string, fn:(e:Event) => void) {
            //dom.addEventListener(evt, function (e:Event) {
            //    window['target'] = e.target;
            //    if (e.target && e.target.matches(selector)) {
            //        e.delegateTarget = e.target;
            //
            //        if (fn) {
            //            fn(e);
            //        }
            //    }
            //    else if (e.target.parentElement && e.target.parentElement.matches(selector)) {
            //        e.delegateTarget = e.target.parentElement;
            //
            //        if (fn) {
            //            fn(e);
            //        }
            //    }
            //});
        }

        public static on(dom:HTMLElement, evt:string, delegate:string, fn:(e: Event) => void) {
            //if (typeof delegate === 'function') {
            //    fn = delegate;
            //    delegate = null;
            //}
            //
            //if (delegate) {
            //    return Ui.delegate(dom, evt, delegate, fn);
            //}
            //
            //dom.addEventListener(evt, fn);
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

