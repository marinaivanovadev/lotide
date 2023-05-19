const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
function tail(array) {
  return array.slice(1); /*new array without head*/
}
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(result.length, 2); // ensure we get back two elements

const emptyArray = [];
const emptyArrayTail = tail(emptyArray);
assertEqual(emptyArray.length, 0); /* check that head is empty*/
assertEqual(emptyArrayTail.length, 0); /*ensure tail empty*/

const oneElement = ["Hello"];
const oneElementTail = tail(oneElement);
assertEqual(oneElementTail.length, 0);
assertEqual(oneElement.length, 1);



