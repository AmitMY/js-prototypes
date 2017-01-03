export default function (testCollision) {
    let methods = ["clone", "forEach", "size", "values"];
    testCollision(Object, methods);

    Object.prototype.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    Object.prototype.forEach = function (obj, callback) {
        for (let key in obj)
            if (obj.hasOwnProperty(key))
                callback(obj[key], key);
    };

    Object.prototype.size = function (obj) {
        return Object.keys(obj).length;
    };


    Object.prototype.values = function (obj) {
        return Object.keys(obj).map(key => obj[key]);
    };
};