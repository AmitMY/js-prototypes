"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    String.prototype.capitalize = function () {
        return this.toLowerCase().replace(/\b\w/g, function (m) {
            return m.toUpperCase();
        });
    };
};

;