"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    Array.prototype.top = function () {
        if (this.length === 0) return null;
        return this[this.length - 1];
    };
};

;