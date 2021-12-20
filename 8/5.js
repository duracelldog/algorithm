const min = (a, b) => {
  if (a > b) {
    return b;
  }

  return a;
}

const 일로만들기 = () => {
  const target = 26;
  const memo = Array.from({ length: target }, () => 0);

  memo[0] = 0;
  memo[1] = 0;
  memo[2] = 1;

  for(let i=3; i<target; i++) {
    memo[i] = memo[i - 1] + 1;

    if (i % 5 === 0) {
      memo[i] = min(memo[i], (memo[i / 5] + 1));
    }

    if (i % 3 === 0) {
      memo[i] = min(memo[i], (memo[i / 3] + 1));
    }

    if (i % 2 === 0) {
      memo[i] = min(memo[i], (memo[i / 2] + 1));
    }
  }

  console.log({ memo });
}

일로만들기();