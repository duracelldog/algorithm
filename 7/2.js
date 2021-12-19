const array = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]; // 10개
const target = 2;

const 이진탐색 = (start, end) => {
  console.log({ start, end })
  const mid = Math.ceil((start + end) / 2);

  if (array[mid] === target) {
    console.log({ mid });
    return;
  }

  if (array[mid] <= target) {
    이진탐색(mid, end);
  } else {
    이진탐색(start, mid);
  }
}

이진탐색(0, array.length - 1);