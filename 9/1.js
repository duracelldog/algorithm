// 다익스트리 알고리즘
const INF = 999999;

// const n = 6; // 노드의 개수
// const m = 11; // 간선의 개수

// const start = 1; // 시작 노드 번호
const graph = [
  [], // 0
  [ // 1
    [2, 2],
    [3, 5],
    [4, 1]
  ],
  [ // 2
    [3, 3],
    [4, 2]
  ],
  [ // 3
    [2, 3],
    [6, 5]
  ],
  [ // 4
    [3, 3],
    [5, 1]
  ],
  [ // 5
    [3, 1],
    [6, 2]
  ],
  [] // 6
];

const visited = Array.from({ length: graph.length }, () => false);
const distance = Array.from({ length: graph.length }, () => INF);

const get_smallest_node = () => {
  let min_value = INF;
  let index = 0; // 가장 최단 거리가 짧은 노드(인덱스)

  for(let i=1; i<=graph.length; i++) { // 1부터 시작하는 이유는 시작 지점 제외
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

  // start와 연결되어 있는 간선들의 비용 입력;
  graph[start].forEach(val => {
    distance[val[0]] = val[1];
  });

  for(let i=1; i<=graph.length; i++) { // 5번 반복 (시작 지점 제외);
    const now = get_smallest_node();
    visited[now] = true;

    graph[now].forEach(val => {
      const cost = distance[now] + val[1];

      if (cost < distance[val[0]]) { // 현재 값과 비교해 최소값을 넣는다
        distance[val[0]] = cost;
      }
    });
  }
}

다익스트리(1); // 1부터 시작

distance.forEach(dist => {
  if (dist === INF) {
    console.log('INFINITY');
  } else {
    console.log(dist);
  }
})