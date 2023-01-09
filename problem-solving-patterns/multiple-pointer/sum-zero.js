function sum_zero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function sum_zero_refactor(arr) {
  let pointer = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[pointer - i] === 0) {
      return [arr[i], arr[pointer - i]];
    }
  }
}

function sum_zero_refactor2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sum_zero_refactor([-4, -3, -2, -1, 0, 1, 2, 5]));
