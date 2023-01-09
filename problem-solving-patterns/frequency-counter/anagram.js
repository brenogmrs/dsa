function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const letterCountWord1 = charCount(word1);
  const letterCountWord2 = charCount(word2);

  for (let key in letterCountWord1) {
    if (!letterCountWord2[key]) {
      return false;
    }

    if (letterCountWord2[key] !== letterCountWord1[key]) {
      return false;
    }
  }

  return true;
}

function charCount(str) {
  const frequencyCounter = {};
  for (let value of str) {
    frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
  }

  return frequencyCounter;
}

const result = isAnagram('diiiia', 'idaaaa');

console.log(result);
