// 그래프 - 노드 - 간선
// 탐색 알고리즘 DepthFirstSearch(깊이 우선 탐색) / BreadthFirstSearch (너비 우선 탐색)

function 인접행렬() {
  const INF = 9999999;
  const graph = [
    [0, 7, 5],
    [7, 0, INF],
    [5, INF, 0]
  ]

  console.log('graph', graph);
}

function 인접리스트() {
  const graph = {
    0: [[1, 7], [2, 5]], // 정점 0에서 정점 1과 점점 2로 향하는 간선이 있다는 뜻 (두번쨰 배열은 간선)
    1: [[0, 7]],
    2: [[0, 5]]
  }

  console.log('graph', graph);
}