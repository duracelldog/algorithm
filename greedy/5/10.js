const n = 3;
const m = 3;

const graph = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

let result = 0;

const DFS = (x, y) => {
  if (
    x >= 0 && x < n &&
    y >= 0 && y < m &&
    graph[x][y] === 0
  ) {
    graph[x][y] = 1;

    DFS(x - 1, y);
    DFS(x, y - 1);
    DFS(x + 1, y);
    DFS(x, y + 1);

    return true;
  }

  return false;
}

for (let i=0; i<n; i++) {
  for (let j=0; j<m; j++) {
    console.log(`${i}, ${j}`)

    if (DFS(i, j)) {
      result += 1;
    }
  }
}

console.log('result', result);