"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    (0, _tape2.default)("Should capitalize string", function (assert) {
        assert.equal("un-capitalized string 123".capitalize(), "Un-Capitalized String 123");
        assert.end();
    });
};

var _tape = require("tape");

var _tape2 = _interopRequireDefault(_tape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;