"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _testCollision = require("../testCollision");

var _testCollision2 = _interopRequireDefault(_testCollision);

var _equals = require("./prototypes/equals");

var _equals2 = _interopRequireDefault(_equals);

var _shuffle = require("./prototypes/shuffle");

var _shuffle2 = _interopRequireDefault(_shuffle);

var _top = require("./prototypes/top");

var _top2 = _interopRequireDefault(_top);

var _unique = require("./prototypes/unique");

var _unique2 = _interopRequireDefault(_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayPrototypes = function () {
    function ArrayPrototypes() {
        _classCallCheck(this, ArrayPrototypes);
    }

    _createClass(ArrayPrototypes, null, [{
        key: "all",
        value: function all() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.equals(isWarning);
            this.shuffle(isWarning);
            this.top(isWarning);
            this.unique(isWarning);
        }
    }, {
        key: "equals",
        value: function equals() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Array, "equals", isWarning);
            (0, _equals2.default)();
        }
    }, {
        key: "shuffle",
        value: function shuffle() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Array, "shuffle", isWarning);
            (0, _shuffle2.default)();
        }
    }, {
        key: "top",
        value: function top() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Array, "top", isWarning);
            (0, _top2.default)();
        }
    }, {
        key: "unique",
        value: function unique() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(Array, "unique", isWarning);
            (0, _unique2.default)();
        }
    }]);

    return ArrayPrototypes;
}();

exports.default = ArrayPrototypes;