const total = 7;
const papers = [2, 3, 5];
const d = [];
const min = (a, b) => {
  if (a > b) {
    return b;
  }

  return a;
}

d[0] = 0;

for(let paper of papers) {
  d[paper] = 1;
}

// d[n] = d[n-paper] + 1;

for(let paper of papers) {
  for(let i=paper; i<=total; i++) {
    if (d[i]) {
      d[i] = min(d[i], d[i-paper] + 1);
    } else {
      d[i] = d[i-paper] + 1;
    }
  }
}

console.log('result', d);