const now = 'a1';
const now_pos = [now[0].charCodeAt(0) - 96, Number(now[1])];
const ways = [
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2]
];
let cnt = 0;

ways.forEach(way => {
  if (
    now_pos[0] + way[0] >= 1 && now_pos[0] + way[0] <=8 &&
    now_pos[1] + way[1] >= 1 && now_pos[1] + way[1] <=8
  ) {
    cnt++;
  }
});

console.log({ cnt })



// const position = 'e1';
// let result = 0; // 답은 2

// const x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].indexOf(position[0]) + 1;
// const y = Number(position[1]);
// const ways = {
//   rightUp: [2, -1],
//   rightDown: [2, 1],
//   leftUp: [-2, -1],
//   leftDown: [-2, 1],
//   upRight: [1, -2],
//   upLeft: [-1, -2],
//   downLeft: [1, 2],
//   downRight: [-1, 2],
// }

// Object.keys(ways).forEach(way => {
//   if (
//     (x + ways[way][0] >= 1 && x + ways[way][0] <= 8) &&
//     (y + ways[way][1] >= 1 && y + ways[way][1] <= 8)
//   ) {
//     result += 1;
//   }
// })


// console.log('result', result);