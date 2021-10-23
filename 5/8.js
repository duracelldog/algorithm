function DFS예제() {
  const graph = {
    1: [2, 3, 8],
    2: [1, 7],
    3: [1, 4, 5],
    4: [3, 5],
    5: [3, 4],
    6: [7],
    7: [2, 6, 8],
    8: [1, 7]
  }

  const visited = Array.from({ length: Object.keys(graph).length }, () => false);


  const DFS = (graph, startNode, visited) => {
    console.log('startNode', startNode);
    visited[startNode] = true;

    graph[startNode].forEach(linkedNode => {
      if(!visited[linkedNode]) {
        DFS(graph, linkedNode, visited);
      }
    });
  }

  DFS(graph, 1, visited);

  // console.log('grapth', visited);
}

DFS예제();

// stack 재귀함수로 구현