export default function () {
    Object.forEach = function (obj, callback) {
        for (let key in obj)
            if (obj.hasOwnProperty(key))
                callback(obj[key], key);
    };

    Object.size = function (obj) {
        return Object.keys(obj).length;
    };

    Object.clone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };

    Object.values = function (obj) {
        return Object.keys(obj).map(key => obj[key]);
    };
};