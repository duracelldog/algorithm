const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// ---------------------------------------------------------------

function 선택정렬(array) {
  for (let i=0; i<array.length; i++) {
    for (let j=i+1; j<array.length; j++) {
      if (array[i] > array[j]) { // 오름차순
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

// ---------------------------------------------------------------

function 삽업정렬(array) {
  for (let i=1; i<array.length; i++) {
    for(let j=0; j<i; j++) {
      if (array[j] > array[i]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}

// ---------------------------------------------------------------

function 퀵정렬(array, start, end) {
  let left = start + 1;
  let right = end;

  if (start > end) {
    return;
  }

  while(left <= right) {
    while(left <= end && array[left] <= array[start]) {
      left++;
    }

    while(right > start && array[right] >= array[start]) {
      right--;
    }

    if (left <= right) {
      const temp = array[right];
      array[right] = array[left];
      array[left] = temp;
    } else {
      const temp = array[right];
      array[right] = array[start];
      array[start] = temp;
    }
  }

  퀵정렬(array, start, right - 1);
  퀵정렬(array, right + 1, end);
}

// ---------------------------------------------------------------

function 간단퀵정렬(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const tail = array.filter(val => val !== pivot);

  const left_side = tail.filter(val => val <= pivot);
  const right_side = tail.filter(val => val > pivot);

  return [
    ...간단퀵정렬(left_side),
    pivot,
    ...간단퀵정렬(right_side)
  ]
}

// ---------------------------------------------------------------

function 계수정렬(array) {
  const count = Array.from({ length: array.length }, () => 0);
  const result = [];

  array.forEach(val => {
    count[val] += 1;
  });

  count.forEach((val, index) => {
    for(let i=0; i<val; i++) {
      result.push(index);
    }
  });

  return result;
}

// ---------------------------------------------------------------

// 선택정렬(array); console.log('result', array);
// 삽업정렬(array); console.log('result', array);
퀵정렬(array, 0, array.length - 1); console.log('result', array);
// console.log('result', 간단퀵정렬(array));
// console.log('result', 계수정렬(array));
