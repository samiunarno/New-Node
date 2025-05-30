// const { a, add, b } = require("./file2");
// const { a: a3, add: add3, b: b3, c } = require("./file3");
// console.log(a3);
// console.log(add3(a, b, c));
// console.log(b3);

const var1 = require("./file2");
const var2 = require("./file3");

console.log(var1.a);
console.log(var1.add(2, 3));
console.log(var1.b);
console.log(var2.a);
console.log(var2.add(2, 3, 5));
console.log(var2.b);

console.log("THanks For the Output");
