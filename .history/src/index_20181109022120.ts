abstract class IComponent {
    data: any;
    tpl: string;

    render() {
        return Object.keys(this.data).reduce((p, k) => {
            return p.replace(`{${k}}`, this.data[k]);
        }, this.tpl);
    }
}


class MyComponent implements IComponent {
    render() {
        throw new Error('Method not implemented.');
    }

    data = {
        prop1: 1,
    }

    tpl = `
        <input v-model={prop1} placeholder="edit prop1 here" />
        <p>{prop1}</p>
    `;

    updateProp1() {
        this.data.prop1++;
    }
}

