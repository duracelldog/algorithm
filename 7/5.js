function 이진탐색(array, target, start, end) {
  while(start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (target < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}

const res = [8, 3, 7, 9, 2];
const req = [5, 7, 9];

const sorted_res = res.sort();
const sorted_req = req.sort();

sorted_req.forEach(target => {
  const result = 이진탐색(sorted_res, target, 0, sorted_res.length - 1);

  // console.log({ target, result })

  if (result) {
    console.log('yes');
  } else {
    console.log('no');
  }
});


// function 부품찾기() {
//   const n = 5;
//   const res = [8, 3, 7, 9, 2];
//   const m = 3;
//   const req = [5, 7, 9];

//   const result = Array.from({length: m}, () => '');

//   req.forEach((val, index) => {
//     if (res.includes(val)) {
//       result[index] = 'yes';
//     } else {
//       result[index] = 'no';
//     }
//   });

//   console.log('result', result);
// }

// 부품찾기();