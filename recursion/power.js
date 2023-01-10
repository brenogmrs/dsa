function power(base, ex) {
  if (ex <= 0) return 1;

  return base * power(base, ex - 1);
}

//console.log(power(2, 0)); // 1
//console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
