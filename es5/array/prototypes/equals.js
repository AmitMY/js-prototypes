"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    Array.prototype.equals = function (array) {
        if (!array || !(array instanceof Array) || this.length != array.length) return false;

        var equals = true;

        this.forEach(function (value, i) {
            if (value instanceof Array && array[i] instanceof Array) {
                if (!value.equals(array[i])) equals = false;
            } else if (value !== array[i]) {
                equals = false;
            }
        });

        return equals;
    };

    // Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", { enumerable: false });
};

;