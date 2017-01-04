import test from "tape";

export default function () {
    // TODO test shuffle?

    let array = [0, 1, 1, 2, "name", "name2", "name"];

    test("Should unique an array", (assert) => {
        let unique = array.unique();

        unique.forEach((value, i) => assert.equal(i, unique.indexOf(value)));
        assert.equal(unique.length, 5);
        assert.end();
    });

    test("Should return top, and not change the array", (assert) => {
        let newArray = array;

        assert.equal(newArray.top(), "name");
        assert.equal(newArray.equals(array), true);
        assert.equal([].top(), null);
        assert.end();
    });

    test("Should compare 2 arrays correctly", (assert) => {
        assert([1, 2, [3, 4]].equals([1, 2, [3, 2]]), false);
        assert([1, "2", "3"].equals([1, 2, 3]), false);
        assert([1, "2,3"].equals([1, 2, 3]), false);
        assert([1, 2, [3, 4]].equals([1, 2, [3, 4]]), true);
        assert([1, 2, 1, 2].equals([1, 2, 1, 2]), true);
        assert.end();
    });
};