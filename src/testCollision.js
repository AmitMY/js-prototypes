export default function testCollision(type, method, warn) {
    if (warn && type.prototype[method])
        console.warn("Overriding existing " + type.constructor.name + ".prototype." + method + ". Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
};
