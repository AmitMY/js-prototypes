"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function () {
    Object.forEach = function (obj, callback) {
        if (!obj instanceof Object) throw new Error("Assertion error: Object.prototype.values got '" + (typeof obj === "undefined" ? "undefined" : _typeof(obj)) + "'");

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) callback(obj[key], key);
        }
    };
};

;