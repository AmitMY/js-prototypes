"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _testCollision = require("../testCollision");

var _testCollision2 = _interopRequireDefault(_testCollision);

var _clone = require("./prototypes/clone");

var _clone2 = _interopRequireDefault(_clone);

var _equals = require("./prototypes/equals");

var _equals2 = _interopRequireDefault(_equals);

var _forEach = require("./prototypes/forEach");

var _forEach2 = _interopRequireDefault(_forEach);

var _size = require("./prototypes/size");

var _size2 = _interopRequireDefault(_size);

var _values = require("./prototypes/values");

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectPrototypes = function () {
    function ObjectPrototypes() {
        _classCallCheck(this, ObjectPrototypes);
    }

    _createClass(ObjectPrototypes, null, [{
        key: "all",
        value: function all() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.clone(isWarning);
            this.equals(isWarning);
            this.forEach(isWarning);
            this.size(isWarning);
            this.values(isWarning);
        }
    }, {
        key: "clone",
        value: function clone() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Object, "clone", isWarning);
            (0, _clone2.default)();
        }
    }, {
        key: "equals",
        value: function equals() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Object, "equals", isWarning);
            (0, _equals2.default)();
        }
    }, {
        key: "forEach",
        value: function forEach() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Object, "forEach", isWarning);
            (0, _forEach2.default)();
        }
    }, {
        key: "size",
        value: function size() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Object, "size", isWarning);
            (0, _size2.default)();
        }
    }, {
        key: "values",
        value: function values() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Object, "values", isWarning);
            (0, _values2.default)();
        }
    }]);

    return ObjectPrototypes;
}();

exports.default = ObjectPrototypes;