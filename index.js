import ArrayPrototypes from "./src/array";
import ObjectPrototypes from "./src/object";
import StringPrototypes from "./src/string";

export default class {
    static array = ArrayPrototypes;
    static object = ObjectPrototypes;
    static string = StringPrototypes;

    static all(isWarning = true) {
        this.array.all(isWarning);
        this.object.all(isWarning);
        this.string.all(isWarning);
    }
}