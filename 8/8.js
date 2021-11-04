const total = 4;
const payments = [3, 5, 7];
let count = 0;
const min = (a, b) => {
  if (a === -1, b === -1) {
    return -1;
  }

  if (a === -1) {
    return b;
  }

  if (b === -1) {
    return a
  }

  if (a < b) {
    return a;
  }

  return b;
}

for(let i=0; i<payments.length; i++) {
  if (total % payments[i] === 0) {
    count = min(count, total / payments[i]);
  } else if (payments.includes(total % payments[i])) {
    count = min(count, Math.floor(total / payments[i]) + 1);
  } else {
    count = -1
  }
}

console.log({ count });