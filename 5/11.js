const graph = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

const BFS = () => {
  const queue = [[0, 0]];

  while (true) {
    if (queue.length === 0) {
      break;
    }

    const target = queue.shift();

    console.log({ target })
    graph[0][0] = 1;

    const ways = [
      [0, -1], // 북
      [0, 1], // 남
      [1, 0], // 동
      [-1, 0], // 서
    ];

    ways.forEach((way) => {
      const [x, y] = target;
      const [nx, ny] = [x + way[0], y + way[1]];

      if (nx >= 0 && nx <= 4 && ny >= 0 && ny <= 5 && graph[nx][ny] === 1) {

        // console.log({ nx, ny })
        // console.log('grag', graph[nx][ny]);
        graph[nx][ny] = graph[x][y] + 1
        queue.push([nx, ny]);
      }
    });
  }

  console.log({ graph });
};

BFS();

// const m = 5; // x
// const n = 6; // y
// const graph = [
//   [1, 0, 1, 0, 1, 0],
//   [1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1]
// ]

// // 상하좌우
// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// const BFS = (x, y) => {
//   const queue = [];
//   queue.push([x, y]);

//   while (queue.length > 0) {
//     const [x, y] = queue.shift();

//     for(let i=0; i<4; i++) {
//       const nx = x + dx[i];
//       const ny = y + dy[i];

//       console.log(nx, ny);

//       if (
//         (nx >=0 && nx < m) &&
//         (ny >=0 && ny < n) &&
//         graph[nx][ny] === 1
//       ) {
//         graph[nx][ny] = graph[x][y] + 1;
//         queue.push([nx, ny]);
//       }
//     }
//   }

//   console.log('graph', graph)

//   return graph[m - 1][n - 1];
// }

// const result = BFS(0, 0);

// console.log('result', result);
