"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    // TODO test foreach?

    (0, _tape2.default)("Should check object size", function (assert) {
        assert.equal(Object.size({}), 0);
        assert.equal(Object.size({ a: 1, b: 2 }), 2);
        var a = 1;
        assert.equal(Object.size({ a: a }), 1);
        assert.end();
    });

    (0, _tape2.default)("Should clone an object", function (assert) {
        var obj = {
            a: 1,
            b: {
                c: 1,
                d: [1, 2]
            }
        };

        var clone = Object.clone(obj);

        assert.equal(obj.a, clone.a);
        assert.equal(obj.b.c, clone.b.c);
        assert.equal(obj.b.d.equals(clone.b.d), true);
        assert.end();
    });

    (0, _tape2.default)("Should check objects value equality", function (assert) {
        var obj1 = { a: 1, b: { a: 1 } };
        var obj2 = { a: 1, b: { a: 1 } };
        var obj3 = { a: 1 };

        assert.equal(Object.equals(obj1, obj2), true);
        assert.equal(Object.equals(obj1, obj3), false);
        assert.equal(Object.equals(obj1.b, obj3), true);

        assert.end();
    });

    (0, _tape2.default)("Should get object as values array", function (assert) {
        var obj = {
            a: 1,
            b: []
        };

        assert.equal(Object.values({}).equals([]), true);
        assert.equal(Object.values(obj).equals([1, []]), true);
        assert.end();
    });
};

var _tape = require("tape");

var _tape2 = _interopRequireDefault(_tape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;