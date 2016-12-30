import arrayPrototypes from "src/array.js";
import objectPrototypes from "src/object.js";

export default class {
    static all() {
        this.array();
        this.object();
    }

    static array() {
        arrayPrototypes();
    }
    
    static object() {
        objectPrototypes();
    }
}