function same(arr, arr2) {
  let controlArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr2[j] === arr[i] ** 2) {
        controlArr.push(arr2[j]);
      }
    }
  }

  controlArr.splice();

  return controlArr.length === arr2.length ? true : false;
}

function same_ref(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

const result = same([1, 2, 3], [1, 4, 9]);
const result2 = same_ref([1, 2, 3, 2], [1, 4, 9, 4]);

console.log(result2);
