let n = 25;
const k = 5;
let tryCnt = 0;

while (true) {
  if (n === 1) {
    break;
  }

  if (n % k === 0) {
    n = n / k;
  } else {
    n = n - 1;
  }

  tryCnt++;
}

console.log({ tryCnt });