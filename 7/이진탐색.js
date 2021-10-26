// 이진 탐색 2 가지 방법
// 1. 재귀 함수
// 2. 반복문

const n = 10;
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

function 재귀함수(array, target, start, end) {
  if (start > end) {
    return;
  }

  const mid = Math.floor((start + end) / 2);

  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
    return 재귀함수(array, target, start, mid - 1);
  } else {
    return 재귀함수(array, target, mid + 1, end);
  }
}

// ---------------------------------------------------------------

function 반복문(array, target, start, end) {

  while(start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

// console.log('result', 재귀함수(array, 7, 0, array.length - 1));
console.log('result', 반복문(array, 7, 0, array.length - 1));

// ---------------------------------------------------------------