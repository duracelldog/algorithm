
function 떡볶이떡만들기() {
  const target = 6;
  const array = [19, 15, 10, 17];

  let start = 0;
  let end = array.sort((a, b) => b - a)[0];
  let result = 0;
  
  let count = 0;

  while(start <= end) {
    count++;
    let total = 0;
    const mid = Math.floor((start + end) / 2);

    array.forEach(val => {
      if (val > mid) {
        total = total + (val - mid);
      }
    });

    console.log({ total, mid })

    if (total > target) {
      start = mid + 1;
    }

    if (total < target) {
      end = mid - 1;
    }

    if (total === target) {
      result = mid;
      break;
    }

    // if (count === 5) {
    //   break;
    // }

    // if (total === target) {
    //   result = mid;
    // } else if (total < target) {
    //   start = mid + 1;
    // } else {
    //   end = mid - 1;
    // }
  }

  console.log('result', result);
}

떡볶이떡만들기();




// function 떡볶이떡만들기() {
//   const target = 6;
//   const array = [19, 15, 10, 17];

//   const sorted_array = array.sort((a, b) => b - a);

//   let start = sorted_array[0];

//   while(true) {
//     const result = sorted_array.reduce((prev, curr) => {
//       console.log({ start, prev, curr })
//       if (curr - start >= 0) {
//         return prev + (curr - start);
//       } else {
//         return prev + 0;
//       }
//     }, 0)

//     if (result >= target) {
//       console.log('result', start);
//       break;
//     } else {
//       start--;
//     }
//   }
// }

// 떡볶이떡만들기();