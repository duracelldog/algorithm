const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const count = Array.from({ length: array.length }, () => 0);
let result = '';

array.forEach(val => {
  count[val] += 1;
});

count.forEach((val, index) => {
  for(let i=0; i<val; i++) {
    result += ` ${index}`;
  }
})

console.log('result', result);