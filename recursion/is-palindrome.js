function isPalindrome(str) {
  let reversed = '';

  function helper(str) {
    if (str.length === 0) return reversed;

    reversed += str[str.length - 1];

    helper(str.slice(0, -1));
  }

  helper(str);

  return reversed === str;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
