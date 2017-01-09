export default function () {
    String.prototype.capitalize = function () {
        return this.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
    };
};