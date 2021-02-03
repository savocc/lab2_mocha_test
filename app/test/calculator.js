const calc = require("../calculator.js")
var assert = require('assert');
assert.strictEqual(calc.add(5,2), 9);
assert.strictEqual(calc.add(5,2), 7);
assert.strictEqual(calc.mul(5,2), 9);
assert.strictEqual(calc.mul(5,2), 10);
assert.strictEqual(calc.sub(5,2), 9);
assert.strictEqual(calc.sub(5,2), 3);
assert.strictEqual(calc.div(10,2), 3);
assert.strictEqual(calc.div(10,2), 5);



