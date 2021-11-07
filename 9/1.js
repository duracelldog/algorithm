// 다익스트리 알고리즘
const INF = 999999;

const n = 6; // 노드의 개수
const m = 11; // 간선의 개수

const start = 1; // 시작 노드 번호
const graph = [
  [1, 2, 2], // a에서 b로 가는 비용이 c라는 의미
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2]
];

const visited = Array.from({ length: graph.length }, () => false);
const distance = Array.from({ length: graph.length }, () => INF);

const get_smallest_node = () => {
  let min_value = INF;
  let index = 0; // 가장 최단 거리가 짧은 노드(인덱스)

  for(let i=1; i<=n; i++) {
    if (distance[i] < min_value && !visited[i]) {
      min_value = distance[i];
      index = i;
    }
  }

  return index;
}

const 다익스트리 = (start) => {
  distance[start] = 0;
  visited[start] = true;

  for(let startValue of graph[start]) {
    distance[startValue[0]] = startValue[1];
  }

  for(let i=0; i<n-1; i++) { // 0~5
    const now = get_smallest_node();
  }
}
