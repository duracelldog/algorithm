const INF = 9999999;
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

// 벙뮨허자 얺었고 + INF값이 아니고 + distance가 제일 작은 값;
const get_smallest_node = () => {
  let min_value = INF;
  let index = 0;

  for (let i in graph) {
    if (!visited[i] && distance[i] < min_value) {
      min_value = distance[i];
      index = i;
    }
  }

  return index;
}

const 다익스트리 = (start) => {
  visited[start] = true;
  distance[start] = 0;

  graph[start].forEach(val => {
    distance[val[0]] = val[1];
  });

  for (let i in graph) {
    const now = get_smallest_node();

    graph[now].forEach(val => {
      const cost = distance[now] + val[1];

      if (cost < distance[val[0]]) {
        distance[val[0]] = cost;
      }
    });
  }

  다익스트리(1);
}