import { BiBinding, Component } from '../src';

@BiBinding
class MyComponent extends Component {
    data = {
        prop1: 1,
    }

    tpl = `
        <input v-model=[prop1] placeholder="edit prop1 here" />
        <p>{prop1}</p>
    `;

    selector = '#app-root';

    constructor() {
        super();
        console.log(this);
        setInterval(() => {
            this.data.prop1++;
            console.log(1);
        }, 1000);
    }
}

const c = new MyComponent();
c.render();