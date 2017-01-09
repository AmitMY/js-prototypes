export default function () {
    Array.prototype.top = function () {
        if (this.length === 0)
            return null;
        return this[this.length - 1];
    };
};