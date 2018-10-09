class VNode {
    constructor(nodeName, attributes, children) {
        // this.nodeName = nodeName;
        // this.attributes = attributes;
        // this.children = children;
    }
}

export class React {
    static h() {}
}

// TODO use VNode to represent DOM Nodes
export function h(node: string, props: any, children: any[]){
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }
    return document.createElement(node);
}
