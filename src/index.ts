export class Component {
    data: any;
    tpl: string;
    selector: string;

    render() {
        const rendered = Object.keys(this.data).reduce((p, k) => {
            return p.replace(`\{${k}\}`, this.data[k]);
        }, this.tpl);
        document.querySelector(this.selector).innerHTML = rendered;

        // bind events after dom rendered
        setTimeout(() => {
            const vModels = document.querySelectorAll('[v-model]');
            vModels.forEach(e => {
                this.bindMutator(e);
            });
        }, 0);
    }

    private bindMutator(ele: Element) {
        const key = ele.getAttribute('v-model').slice(1, -1);
        ele.addEventListener('input', (e) => this.data[key] = (e.target as any).value)
    }
}

export function BiBinding<Component extends {new(...args:any[]):{}}>(constructor: Component) {
    return class extends constructor {
        _data;

        constructor(...args) {
            super(args);
            
            Object.keys((this as any).data).forEach(k => {
                let _value = (this as any).data[k];
                Object.defineProperty((this as any).data, k, {
                    get() {
                        return _value;
                    },
                    set: (val) => {
                        _value = val;
                        constructor.prototype.render.apply(this);
                    }
                })
            })

        }
    }
}


