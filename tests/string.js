import test from "tape";

export default function () {
    test("Should capitalise string", (assert) => {
        assert.equal("UnCap1talized 5tring", "UNCAP1TALIZED 5TRING");
        assert.end();
    });
};