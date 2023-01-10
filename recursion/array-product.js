function productOfArray(array) {
  let result = 1;

  if (array.length === 0) return result;

  result = array[0] * productOfArray(array.slice(1));

  return result;
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
