function someRecursive(arr, cond) {
  let condResult = false;

  function helper(arr) {
    if (arr.length === 0) return condResult;

    const result = cond(arr[0]);

    if (result === true) {
      condResult = result;
    }

    helper(arr.slice(1));
  }

  helper(arr);

  return condResult;
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
