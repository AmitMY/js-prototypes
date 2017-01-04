import testCollision from "../testCollision";

import Capitalize from "./prototypes/equals";

export default class StringPrototypes {
    all(isWarning = true) {
        this.capitalize(isWarning);
    }

    static capitalize(isWarning = true) {
        testCollision(String, "capitalize", isWarning);
        Capitalize();
    }
}