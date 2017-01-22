"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    Array.prototype.unique = function () {
        return this.filter(function (v, i, a) {
            return a.indexOf(v) === i;
        });
    };
};

;