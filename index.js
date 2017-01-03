import arrayPrototypes from "./src/array.js";
import objectPrototypes from "./src/object.js";
import stringPrototypes from "./src/string.js";

let warn = false;

function testCollision(type, method) {
    if (warn && type.prototype[method])
        console.warn("Overriding existing " + type.constructor.name + ".prototype." + method + ". Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
}

export default class {
    static all(isWarning = false) {
        warn = isWarning;
        this.array(testCollision);
        this.object(testCollision);
        this.string(testCollision);
    }

    static array(isWarning = false) {
        warn = isWarning;
        arrayPrototypes(testCollision);
    }

    static object(isWarning = false) {
        warn = isWarning;
        objectPrototypes(testCollision);
    }

    static string(isWarning = false) {
        warn = isWarning;
        stringPrototypes(testCollision);
    }
}