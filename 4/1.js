const n = 5;
const ways = ['R', 'R', 'R', 'U', 'D', 'D'];
const pos = [1, 1];

ways.forEach(way => {
  if (way === 'R') {
    if (pos[1] + 1 <= n) {
      pos[1] = pos[1] + 1;
    }
  }

  if (way === 'L') {
    if (pos[1] - 1 >= 1) {
      pos[1] = pos[1] - 1;
    }
  }

  if (way === 'U') {
    if (pos[0] - 1 >= 1) {
      pos[0] = pos[0] - 1;
    }
  }

  if (way === 'D') {
    if (pos[0] + 1 <= n) {
      pos[0] = pos[0] + 1;
    }
  }

  console.log({ pos })
})





// const n = 5; // nxn 맵이다
// const ways = ['R', 'R', 'R', 'U', 'D', 'D'];
// // 정답: 3 4

// let x = 1;
// let y = 1;

// ways.forEach(way => {
//   switch(way) {
//     case 'L':
//       if (x !== 1) {
//         x -= 1;
//       }
//       break;
//     case 'R':
//       if (x < n) {
//         x += 1;
//       }
//       break;
//     case 'U':
//       if (y !== 1) {
//         y -= 1;
//       }
//       break;
//     case 'D':
//       if (y < n) {
//         y += 1;
//       }
//       break;
//   }
// })

// console.log('result', x, y);