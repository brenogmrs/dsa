function binary_search(list, item) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    let guess = list[middle];

    if (guess == item) {
      return middle;
    } else if (guess > item) {
      end--;
    } else {
      start++;
    }
  }

  return null;
}

const list = [1, 3, 5, 7, 9];
console.log(binary_search(list, 3));
console.log(binary_search(list, -1));
console.log(2 ** 8);
