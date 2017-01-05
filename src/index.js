import ArrayPrototypes from "./array";
import ObjectPrototypes from "./object";
import StringPrototypes from "./string";

export {ArrayPrototypes, ObjectPrototypes, StringPrototypes};

export default function (isWarning = true) {
    ArrayPrototypes.all(isWarning);
    ObjectPrototypes.all(isWarning);
    StringPrototypes.all(isWarning);
}
