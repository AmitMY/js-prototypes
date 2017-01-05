import testCollision from "../testCollision";

import Capitalize from "./prototypes/capitalize";

export default class StringPrototypes {
    static all(isWarning = true) {
        this.capitalize(isWarning);
    }

    static capitalize(isWarning = true) {
        testCollision(String, "capitalize", isWarning);
        Capitalize();
    }
}