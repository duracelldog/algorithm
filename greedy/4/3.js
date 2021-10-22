const position = 'e1';
let result = 0; // 답은 2

const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(position[0]) + 1;
const y = Number(position[1]);

console.log(x, y)

// if (
//   x >= 3 &&
//   x <= 6 &&
//   y >= 3 &&
//   y <= 6
// ) {
//   result = 8;
// } else if (
//   x >= 2 &&
//   x <= 7 &&
//   y >= 2 &&
//   y <= 7
// ) {
//   if (x === y) {
//     result = 4;
//   } else {
//     result = 6;
//   }
// } else if (
//   x >= 1 &&
//   x <= 8 &&
//   y >= 1 &&
//   y <= 8
// ) {
//   if ((x >= 3 && x <= 6) || (y >= 3 && y <=6)) {
//     result = 4;
//   } else if (((x >= 2 && x <= 7) || (y >= 2 && y <= 7))) {
//     result = 3;
//   } else {
//     result = 2;
//   }
// }

const ways = {
  rightUp: [2, -1],
  rightDown: [2, 1],
  leftUp: [-2, -1],
  leftDown: [-2, 1],
  upRight: [1, -2],
  upLeft: [-1, -2],
  downLeft: [1, 2],
  downRight: [-1, 2],
}

Object.keys(ways).forEach(way => {
  if (
    (x + ways[way][0] >= 1 && x + ways[way][0] <= 8) &&
    (y + ways[way][1] >= 1 && y + ways[way][1] <= 8)
  ) {
    result += 1;
  }
})


console.log('result', result);