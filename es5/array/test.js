"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // TODO test shuffle?

    var array = [0, 1, 1, 2, "name", "name2", "name"];

    (0, _tape2.default)("Should unique an array", function (assert) {
        var unique = array.unique();

        unique.forEach(function (value, i) {
            return assert.equal(i, unique.indexOf(value));
        });
        assert.equal(unique.length, 5);
        assert.end();
    });

    (0, _tape2.default)("Should return top, and not change the array", function (assert) {
        var newArray = array;

        assert.equal(newArray.top(), "name");
        assert.equal(newArray.equals(array), true);
        assert.equal([].top(), null);
        assert.end();
    });

    (0, _tape2.default)("Should compare 2 arrays correctly", function (assert) {
        assert.equal([1, 2, [3, 4]].equals([1, 2, [3, 2]]), false);
        assert.equal([1, "2", "3"].equals([1, 2, 3]), false);
        assert.equal([1, "2,3"].equals([1, 2, 3]), false);
        assert.equal([1, 2, [3, 4]].equals([1, 2, [3, 4]]), true);
        assert.equal([1, 2, 1, 2].equals([1, 2, 1, 2]), true);
        assert.end();
    });
};

var _tape = require("tape");

var _tape2 = _interopRequireDefault(_tape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;