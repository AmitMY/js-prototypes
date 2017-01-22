"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StringPrototypes = exports.ObjectPrototypes = exports.ArrayPrototypes = undefined;

exports.default = function () {
    var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _array2.default.all(isWarning);
    _object2.default.all(isWarning);
    _string2.default.all(isWarning);
};

var _array = require("./array");

var _array2 = _interopRequireDefault(_array);

var _object = require("./object");

var _object2 = _interopRequireDefault(_object);

var _string = require("./string");

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ArrayPrototypes = _array2.default;
exports.ObjectPrototypes = _object2.default;
exports.StringPrototypes = _string2.default;