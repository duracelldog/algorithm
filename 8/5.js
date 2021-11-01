
const min = (a, b) => {
  if (a < b) {
    return a;
  }

  return b;
};

const a = Array.from({length: 26}, () => 0);

a[1] = 0;
a[2] = 1;

for(let i=3; i<=26; i++) {
  a[i] = a[i-1] + 1;

  if (i % 2 === 0) {
    a[i] = min(a[i], (a[i / 2] + 1));
  }

  if (i % 3 === 0) {
    a[i] = min(a[i], (a[i / 3] + 1));
  }

  if (i % 5 === 0) {
    a[i] = min(a[i], (a[i / 5] + 1));
  }
}

console.log('result', a[26]);