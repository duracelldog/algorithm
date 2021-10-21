const position = 'a1';
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

const direction = {
  rightUp: (x, y) => (x + 2 <= 8 && y - 1 >= 1),
  rightDown: (x, y) => (x + 2 <= 8 && y + 1 <= 8),
  leftUp: (x, y) => (x - 2 >= 1 && y - 1 >= 1),
  leftDown: (x, y) => (x - 2 >= 1 && y + 1 <= 8),
  upRight: (x, y) => (x + 1 <= 8 && y - 2 >= 1),
  upLeft: (x, y) => (x - 1 >= 1 && y - 2 >= 1),
  downLeft: (x, y) => (x + 1 <= 8 && y + 2 <= 8),
  downRight: (x, y) => (x - 1 >= 1 && y + 2 <= 8),
}

Object.keys(temp).forEach(key => {
  if (temp[key](x, y)) {
    result += 1;
  }
})


console.log('result', result);