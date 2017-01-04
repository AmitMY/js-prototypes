export default function (testCollision) {
    let methods = ["clone", "forEach", "size", "values"];
    testCollision(Object, methods);

    Object.clone = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.clone got '" + typeof obj + "'");

        return JSON.parse(JSON.stringify(obj));
    };

    Object.forEach = function (obj, callback) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.values got '" + typeof obj + "'");

        for (let key in obj)
            if (obj.hasOwnProperty(key))
                callback(obj[key], key);
    };

    Object.size = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.size got '" + typeof obj + "'");
        return Object.keys(obj).length;
    };


    Object.values = function (obj) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.values got '" + typeof obj + "'");
        return Object.keys(obj).map(key => obj[key]);
    };
};