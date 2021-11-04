const n = 3;
const d = []

d[0] = 0;
d[1] = 1;
d[2] = 3;

for(let i=3; i<=n; i++) {
  d[i] = d[i-1] + d[n-2] * 2;
}

console.log('result', d[3]);