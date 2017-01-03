export default function (testCollision) {
    let methods = ["shuffle", "unique", "top", "equals"];
    testCollision(Array, methods);

    Array.prototype.shuffle = function () {
        return this.sort(() => 0.5 - Math.random());
    };

    Array.prototype.unique = function () {
        return this.filter((v, i, a) => a.indexOf(v) === i);
    };

    Array.prototype.top = function () {
        if (this.length === 0)
            return null;
        return this[this.length - 1];
    };

    Array.prototype.equals = function (array) {
        if (!array || !(array instanceof Array) || this.length != array.length)
            return false;

        this.forEach((value, i) => {
            if (value instanceof Array && array[i] instanceof Array) {
                if (!value.equals(array[i]))
                    return false;
            } else if (value !== array[i])
                return false;
        });

        return true;
    };

    // Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", {enumerable: false});
};