function sameFrequency(num1, num2) {
  const iter1 = String(num1);
  const iter2 = String(num2);

  const fc1 = {};
  const fc2 = {};

  for (let value of iter1) {
    fc1[value] = (fc1[value] || 0) + 1;
  }

  for (let value of iter2) {
    fc2[value] = (fc2[value] || 0) + 1;
  }

  for (let key in fc1) {
    if (!fc2[key]) {
      return false;
    }

    if (fc1[key] !== fc2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
