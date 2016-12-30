import arrayHelper from "src/array.js";
import objectHelper from "src/object.js";

export default class {
    static all() {
        this.array();
        this.object();
    }

    static array() {
        arrayHelper();
    }
    
    static object() {
        objectHelper();
    }
}