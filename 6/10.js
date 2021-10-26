const n = 3;
const array = [15, 27, 12, 15];

console.log(array.sort((a, b) => {
  console.log({a, b})
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
}))

// console.log(array.sort((a, b) => b - a))