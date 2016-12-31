import arrayPrototypes from "./src/array.js";
import objectPrototypes from "./src/object.js";
import stringPrototypes from "./src/string.js";

export default class {
    static all() {
        this.array();
        this.object();
        this.string();
    }

    static array() {
        arrayPrototypes();
    }

    static object() {
        objectPrototypes();
    }

    static string() {
        stringPrototypes();
    }
}