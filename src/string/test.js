import test from "tape";

export default function () {
    test("Should capitalize string", (assert) => {
        assert.equal("un-capitalized string 123".capitalize(), "Un-Capitalized String 123");
        assert.end();
    });
};