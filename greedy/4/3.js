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

const ways = [
  'RightUp',
  'RightDown',
  'LeftUp',
  'LeftDown',
  'UpRight',
  'UpLeft',
  'DownLeft',
  'DownRight'
];

const func = {
  right: {
    up: (x, y) => (x + 2 <= 8 && y - 1 >= 1),
    down: (x, y) => (x + 2 <= 8 && y + 1 <= 8),
  },
  left: {
    up: (x, y) => (x - 2 >= 1 && y - 1 >= 1),
    down: (x, y) => (x - 2 >= 1 && y + 1 <= 8),
  },
  up: {
    right: (x, y) => (x + 1 <= 8 && y - 2 >= 1),
    left: (x, y) => (x - 1 >= 1 && y - 2 >= 1),
  },
  down: {
    right: (x, y) => (x + 1 <= 8 && y + 2 <= 8),
    left: (x, y) => (x - 1 >= 1 && y + 2 <= 8),
  }
}

ways.forEach(way => {
  switch(way) {
    case 'RightUp':
      if (func.right.up(x,y)) {
        console.log('RightUp');
        result += 1;
      }
      break;
    case 'RightDown':
      if (func.right.down(x,y)) {
        console.log('RightDown');
        result += 1;
      }
      break;
    case 'LeftUp':
      if (func.left.up(x,y)) {
        console.log('LeftUp');
        result += 1;
      }
      break;
    case 'LeftDown':
      if (func.left.down(x,y)) {
        console.log('LeftDown');
        result += 1;
      }
      break;
    case 'UpRight':
      if (func.up.right(x,y)) {
        console.log('UpRight');
        result += 1;
      }
      break;
    case 'UpLeft':
      if (func.up.left(x,y)) {
        console.log('UpLeft');
        result += 1;
      }
      break;
    case 'DownRight':
      if (func.down.right(x,y)) {
        console.log('DownRight');
        result += 1;
      }
      break;
    case 'DownLeft':
      if (func.down.left(x,y)) {
        console.log('DownLeft');
        result += 1;
      }
      break;
  }
});

console.log('result', result);