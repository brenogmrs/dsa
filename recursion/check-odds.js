function checkOdds(list) {
  if (list.length === 0) return null;

  if (list[0] % 2 !== 0) {
    return list[0];
  }
  list.slice(1);
  return checkOdds(list);
}

function countDown(num) {
  if (num <= 0) {
    console.log('terminou');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  console.log(num);
  return num + sumRange(num - 1);
}

function factorial_iter(num) {
  let fact = 1;

  for (let i = num; i > 1; i--) {
    fact *= i;
  }

  return fact;
}

function factorial_rec(num) {
  if (num === 1) return 1;
  return num * factorial_rec(num - 1);
}

const list = [3142, 5798, 6550, 5914];
//console.log(checkOdds(list));
console.log(factorial_rec(50));
