function averagePair(arr, givenAvg) {
  if (arr.length === 0) return false;
  let i = 0;

  let avg = 0;
  for (let j = 1; j < arr.length; j++) {
    avg = (arr[i] + arr[j]) / 2;

    if (avg === givenAvg) {
      return true;
    }

    i++;
  }

  return false;
}

function averagePair(arr, givenAvg) {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  let avg = 0;
  while (left < right) {
    avg = (arr[left] + arr[right]) / 2;

    if (avg === givenAvg) {
      return true;
    } else if (avg < givenAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

//console.log(averagePair2([1, 2, 3], 2.5)); // true
console.log(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
//console.log(averagePair2([-1, 0, 3, 4, 5, 6], 4.1)); // false
//console.log(averagePair2([], 4)); // false
