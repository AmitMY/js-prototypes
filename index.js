import ArrayPrototypes from "./src/array";
import ObjectPrototypes from "./src/object";
import StringPrototypes from "./src/string";

export {ArrayPrototypes, ObjectPrototypes, StringPrototypes};

export default function (isWarning = true) {
    ArrayPrototypes.all(isWarning);
    ObjectPrototypes.all(isWarning);
    StringPrototypes.all(isWarning);
}
