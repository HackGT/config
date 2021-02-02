const test = require("tape");

test("config files parse", t => {
    t.doesNotThrow(() => require(".."), "index does not throw");
    t.doesNotThrow(() => require("../.stylelintrc.json"), ".stylelintrc.json does not throw");
    t.end();
});
