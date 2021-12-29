const INF = 99999999;
const n = 5; // 노드의 개수
const m = 7; // 간선의 개수
const links = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];
const k = 5; // 거쳐갈 노드
const x = 4; // 최종 목적지 노드
const graph = [
  [INF, INF, INF, INF, INF],
  [INF, INF, INF, INF, INF],
  [INF, INF, INF, INF, INF],
  [INF, INF, INF, INF, INF],
  [INF, INF, INF, INF, INF],
];
const min = (a, b) => (a > b ? b : a);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) {
      graph[i][j] = 0;
    }
  }
}

links.forEach((link) => {
  graph[link[0] - 1][link[1] - 1] = 1;
  graph[link[1] - 1][link[0] - 1] = 1;
});

console.log("before", graph);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log("after", graph);

const result = graph[0][k - 1] + graph[k - 1][x - 1];

console.log({ result });
