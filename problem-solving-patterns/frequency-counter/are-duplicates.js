function areThereDuplicates(...args) {
  const fc = {};

  for (const value of args) {
    if (fc[value]) {
      return true;
    }

    if (!fc[value]) {
      fc[value] = (fc[value] || 0) + 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
