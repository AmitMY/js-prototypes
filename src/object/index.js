import testCollision from "../testCollision";

import Clone from "./prototypes/clone";
import Equals from "./prototypes/equals";
import ForEach from "./prototypes/forEach";
import Size from "./prototypes/size";
import Values from "./prototypes/values";

export default class ObjectPrototypes {
    static all(isWarning = true) {
        this.clone(isWarning);
        this.equals(isWarning);
        this.forEach(isWarning);
        this.size(isWarning);
        this.values(isWarning);
    }

    static clone(isWarning = true) {
        testCollision(Object, "clone", isWarning);
        Clone();
    }

    static equals(isWarning = true) {
        testCollision(Object, "equals", isWarning);
        Equals();
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