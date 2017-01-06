interface Object {
    clone(obj: Object): Object;
    forEach(obj: Object, callback: Function): void;
    size(obj: Object): number;
    values(obj: Object): Array;
}

interface Array {
    equals(array: Array): boolean;
    shuffle(): Array;
    top(): any;
    unique(): Array;
}

interface String {
    capitalize(): String;
}