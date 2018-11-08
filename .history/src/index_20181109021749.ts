interface IComponent {
    data: any;
    tpl: string;
}


class MyComponent implements IComponent {
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

