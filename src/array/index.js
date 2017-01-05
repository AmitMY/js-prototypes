import testCollision from "../testCollision";

import Equals from "./prototypes/equals";
import Shuffle from "./prototypes/shuffle";
import Top from "./prototypes/top";
import Unique from "./prototypes/unique";

export default class ArrayPrototypes {
    static all(isWarning = true) {
        this.equals(isWarning);
        this.shuffle(isWarning);
        this.top(isWarning);
        this.unique(isWarning);
    }

    static equals(isWarning = true) {
        testCollision(Array, "equals", isWarning);
        Equals();
    }

    static shuffle(isWarning = true) {
        testCollision(Array, "shuffle", isWarning);
        Shuffle();
    }

    static top(isWarning = true) {
        testCollision(Array, "top", isWarning);
        Top();
    }

    static unique(isWarning = true) {
        testCollision(Array, "unique", isWarning);
        Unique();
    }
}