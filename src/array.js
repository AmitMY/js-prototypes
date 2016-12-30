export default function () {
    Array.prototype.shuffle = function () {
        return this.sort(()=> 0.5 - Math.random());
    };

    Array.prototype.unique = function () {
        return this.filter((v, i, a) => a.indexOf(v) === i);
    };

    Array.prototype.top = function () {
        if (this.length === 0)
            return null;
        return this[this.length - 1];
    };
};