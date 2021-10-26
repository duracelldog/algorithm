const n = 5;
const k = 3
const a = [1, 2, 5, 4, 3];
const b = [5, 5, 6, 6, 5];

const sort_a = a.sort((a, b) => a-b);
const sort_b = b.sort((a, b) => b-a);

// console.log({ sort_a ,sort_b })

for(let i=0; i<k; i++) {
  const temp = sort_a[i];
  sort_a[i] = sort_b[i];
  sort_b[i] = temp;
}

// console.log({ sort_a ,sort_b })

console.log('result', sort_a.reduce((prev, current) => current + prev));