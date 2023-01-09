function count_unique_values(arr) {
  if (arr.length === 0) return 0;
  const uniques = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniques.push(arr[i]);
    }
  }

  return uniques.length;
}

function count_unique_values_refactor(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(count_unique_values_refactor([1, 2, 2, 2, 2, 3, 3, 3, 4, 7, 7]));
