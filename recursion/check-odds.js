function checkOdds(list) {
  if (list.length === 0) return null;

  if (list[0] % 2 !== 0) {
    return list[0];
  }
  list.slice(1);
  return checkOdds(list);
}

const list = [3142, 5798, 6550, 5914];

console.log(checkOdds(50));
