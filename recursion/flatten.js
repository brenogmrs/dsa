function flatten(arr) {
  let newArray = [];

  function helper(arr) {
    if (arr.length === 0) return;

    if (!Array.isArray(arr[0])) {
      newArray.push(arr[0]);
    } else {
      helper(arr[0]);
    }

    arr.splice(0, 1);

    helper(arr);
  }

  helper(arr);

  return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
