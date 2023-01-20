function binary_search(list, item) {
  let start = 0;
  let end = list.length - 1;

  let middle = Math.floor((start + end) / 2);
  while (list[middle] !== item && start <= end) {
    if (item < list[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return list[middle] === item ? middle : -1;
}

const list = [1, 3, 5, 7, 9];
console.log(binary_search(list, 3));
console.log(binary_search(list, -1));
