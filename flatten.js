const flatten = (arr) => {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...arr[i]);/* push.apply() or ... to concatenate  elements)*/
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]


module.exports = flatten;