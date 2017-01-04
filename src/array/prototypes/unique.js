export default function () {
    Array.prototype.unique = function () {
        return this.filter((v, i, a) => a.indexOf(v) === i);
    };
};