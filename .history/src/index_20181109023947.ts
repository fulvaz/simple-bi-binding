abstract class Component {
    data: any;
    tpl: string;
    selector: string;

    render() {
        const rendered = Object.keys(this.data).reduce((p, k) => {
            return p.replace(`{${k}}`, this.data[k]);
        }, this.tpl);
        document.querySelector(this.selector).innerHTML = rendered;
    }
}


export function BiBinding<T extends {new(...args:any[]):{}}>(constructor:T) {
    const prototype = constructor.prototype;
    Object.defineProperties(prototype)


    return class extends constructor {
        private _data;
        public get data() {
            return this._data;
        }
        public set data(value) {
            this._data = value;
            this.render();
        }
    }
}


@BiBinding
class MyComponent extends Component {
    data = {
        prop1: 1,
    }

    tpl = `
        <input v-model={prop1} placeholder="edit prop1 here" />
        <p>{prop1}</p>
    `;

    selector = '#app-root';
}

