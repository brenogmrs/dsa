function stringSearch(str1, str2) {
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < str1.length) {
    while (j < str2.length) {
      if (str1[i] === str2[j]) {
        console.log(str1[i]);
        j++;
        i++;
      }
    }
  }
}

stringSearch(str1, str2);
