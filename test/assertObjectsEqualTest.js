const assertObjectsEqual = require(`../assertObjectsEqual`);

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 3 };
const object4 = { a: 1 , b: 2};

console.log(assertObjectsEqual(object1, object2));
console.log(assertObjectsEqual(object1, object3));
console.log(assertObjectsEqual(object1, object4));
