export default function () {
    Array.prototype.shuffle = function () {
        return this.sort(() => 0.5 - Math.random());
    };
};