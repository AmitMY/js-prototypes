"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    Array.prototype.shuffle = function () {
        return this.sort(function () {
            return 0.5 - Math.random();
        });
    };
};

;