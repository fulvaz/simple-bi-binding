export class Component {
    data: any;
    tpl: string;
    selector: string;

    render() {
        const rendered = Object.keys(this.data).reduce((p, k) => {
            return p.replace(`\{${k}\}`, this.data[k]);
        }, this.tpl);
        document.querySelector(this.selector).innerHTML = rendered;
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


