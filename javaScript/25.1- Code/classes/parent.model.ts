export class Parent {
    parentProp1: string;
    constructor() {

    }
    add(x?: number, y?: number) {
        return (x || 0) + (y || 0);
    }
}
