export default function () {
    Object.size = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.size got '" + typeof obj + "'");
        return Object.keys(obj).length;
    };
};