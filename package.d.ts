interface Object {
    clone<T>(obj: T): T;
    equals(obj1: Object, obj2: Object): boolean;
    forEach(obj: Object, callback: Function): void;
    size(obj: Object): number;
    values(obj: Object): Array<any>;
}

interface Array<T> {
    equals(array: Array<any>): boolean;
    shuffle(): Array<T>;
    top(): any;
    unique(): Array<T>;
}

interface String {
    capitalize(): String;
}