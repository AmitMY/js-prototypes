export default function () {
    Object.values = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.values got '" + typeof obj + "'");
        return Object.keys(obj).map(key => obj[key]);
    };
};