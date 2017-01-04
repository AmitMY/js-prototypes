import testCollision from "../testCollision";

import Clone from "./prototypes/clone";
import ForEach from "./prototypes/forEach";
import Size from "./prototypes/size";
import Values from "./prototypes/values";

export default class ObjectPrototypes {
    all(isWarning = true) {
        this.clone(isWarning);
        this.forEach(isWarning);
        this.size(isWarning);
        this.values(isWarning);
    }

    static clone(isWarning = true) {
        testCollision(Object, "clone", isWarning);
        Clone();
    }

    static forEach(isWarning = true) {
        testCollision(Object, "forEach", isWarning);
        ForEach();
    }

    static size(isWarning = true) {
        testCollision(Object, "size", isWarning);
        Size();
    }

    static values(isWarning = true) {
        testCollision(Object, "values", isWarning);
        Values();
    }
}