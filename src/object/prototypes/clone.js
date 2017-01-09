export default function () {
    Object.clone = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.clone got '" + typeof obj + "'");

        return JSON.parse(JSON.stringify(obj));
    };
};