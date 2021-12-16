const n = 3;
const m = 3;

const graph = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

const DFS = (x, y) => {
  if (x >= 0 && x < n && y >= 0 && y < m && graph[x][y] === 0) {
    graph[x][y] = 1;

    DFS(x - 1, y); // 서쪽
    DFS(x, y - 1); // 북쪽
    DFS(x + 1, y); // 동쪽
    DFS(x, y + 1); // 남쪽

    return true;
  }

  return false;
};

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(`${i}, ${j}`);

    if (DFS(i, j)) {
      result += 1;
    }
  }
}

console.log("result", result);
