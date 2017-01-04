export default function () {
    Object.forEach = function (obj, callback) {
        if (!obj instanceof Object)
            throw new Error("Assertion error: Object.prototype.values got '" + typeof obj + "'");

        for (let key in obj)
            if (obj.hasOwnProperty(key))
                callback(obj[key], key);
    };
};