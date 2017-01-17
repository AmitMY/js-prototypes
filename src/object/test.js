import test from "tape";

export default function () {
    // TODO test foreach?

    test("Should check object size", (assert) => {
        assert.equal(Object.size({}), 0);
        assert.equal(Object.size({a: 1, b: 2}), 2);
        let a = 1;
        assert.equal(Object.size({a}), 1);
        assert.end();
    });

    test("Should clone an object", (assert) => {
        let obj = {
            a: 1,
            b: {
                c: 1,
                d: [1, 2]
            }
        };

        let clone = Object.clone(obj);

        assert.equal(obj.a, clone.a);
        assert.equal(obj.b.c, clone.b.c);
        assert.equal(obj.b.d.equals(clone.b.d), true);
        assert.end();
    });


    test("Should check objects value equality", (assert) => {
        let obj1 = {a: 1, b: {a: 1}};
        let obj2 = {a: 1, b: {a: 1}};
        let obj3 = {a: 1};

        assert.equal(Object.equals(obj1, obj2), true);
        assert.equal(Object.equals(obj1, obj3), false);
        assert.equal(Object.equals(obj1.b, obj3), true);

        assert.end();
    });

    test("Should get object as values array", (assert) => {
        let obj = {
            a: 1,
            b: []
        };

        assert.equal(Object.values({}).equals([]), true);
        assert.equal(Object.values(obj).equals([1, []]), true);
        assert.end();
    });
};