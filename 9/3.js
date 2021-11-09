const n = 4 // 노드의 개수
const m = 7 // 간선의 개수
const INF = 99999999;

const min = (a, b) => a > b ? b : a;

const graph = [
  [0, 4, INF, 6],
  [3, 0, 7, INF],
  [5, INF, 0, 4],
  [INF, INF, 2, 0]
];

for(let i=0; i<n; i++) {
  for(let j=0; j<n; j++) {
    for(let k=0; k<n; k++) {
      graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log({ graph });