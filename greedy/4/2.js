const n = 5;
let result = 0;

for(let i=0; i<=n; i++) {
  for(let j=0; j<60; j++) {
    for(let k=0; k<60; k++) {
      if (`${i}:${j}:${k}`.includes('3')) {
        result += 1;
      }
    }
  }
}

console.log('result', result);