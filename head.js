const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ ${actual} === ${expected}`)
  } else {
      console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
function head(array) {
  if (array.length > 0) {
    return array[0];
  } else {
    return undefined;
  }

}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]), undefined)