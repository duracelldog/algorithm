// 팩토리얼 구현


function 반복적(n) {
  let result = 1;

  for(let i=n; i>0; i--) {
    console.log('result', result);
    console.log('i', i);
    result = result * i;
  }

  return result;
}

function 재귀적(n) {
  if (n === 0) {
    return 1;
  }

  return n * 재귀적(n - 1);
}

console.log(재귀적(5));