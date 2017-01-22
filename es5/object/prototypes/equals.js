"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    Object.equals = function (obj1, obj2) {
        return JSON.stringify(obj1) == JSON.stringify(obj2);
    };
};

;