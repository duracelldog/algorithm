const array = [1, 3, 1, 5];
const a = Array.from({length: array.length + 1}, () => 0);
const max = (a, b) => a > b ? a : b;

a[1] = array[0];
a[2] = max(array[0], array[1]);

for(let i=3; i<=array.length; i++) {
  a[i] = max(a[i-1], a[i-2] + array[i-1]);
}

console.log('a', a);