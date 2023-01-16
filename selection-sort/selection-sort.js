function findLowest(arr) {
  let lowest = arr[0];
  let lowestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
      lowestIndex = i;
    }
  }

  return lowestIndex;
}

function selectionSort(arr) {
  const ordered = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let lowestIndex = findLowest(arr);

    ordered.push(arr.splice(lowestIndex, 1)[0]);
  }

  return ordered;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
