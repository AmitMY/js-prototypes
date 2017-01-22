"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _testCollision = require("../testCollision");

var _testCollision2 = _interopRequireDefault(_testCollision);

var _capitalize = require("./prototypes/capitalize");

var _capitalize2 = _interopRequireDefault(_capitalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringPrototypes = function () {
    function StringPrototypes() {
        _classCallCheck(this, StringPrototypes);
    }

    _createClass(StringPrototypes, null, [{
        key: "all",
        value: function all() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.capitalize(isWarning);
        }
    }, {
        key: "capitalize",
        value: function capitalize() {
            var isWarning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            (0, _testCollision2.default)(String, "capitalize", isWarning);
            (0, _capitalize2.default)();
        }
    }]);

    return StringPrototypes;
}();

exports.default = StringPrototypes;