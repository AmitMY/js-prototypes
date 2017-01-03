export default function (testCollision) {
    let methods = ["capitalize"];
    testCollision(Object, methods);

    String.prototype.capitalize = function () {
        return this.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
    };
};