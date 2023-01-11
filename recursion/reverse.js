function reverse(str) {
  let reversed = '';

  function helper(str) {
    if (str.length === 0) return reversed;

    reversed += str[str.length - 1];

    helper(str.slice(0, -1));
  }

  helper(str);

  return reversed;
}

console.log(reverse('awesome'));
