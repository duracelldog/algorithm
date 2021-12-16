const graph = {
  0: [],
  1: [2, 3, 8],
  2: [1, 7],
  3: [1, 4, 5],
  4: [3, 5],
  5: [3, 4],
  6: [7],
  7: [2, 6, 8],
  8: [1, 7],
};

const visited = Array.from({ length: Object(graph).length }, () => false);

const BFS = (start) => {
  const queue = [start];
  visited[start] = true;

  while (true) {
    if (queue.length === 0) {
      break;
    }

    const target = queue.shift();

    console.log({ target });

    graph[target].forEach((node) => {
      if (!visited[node]) {
        visited[node] = true;
        queue.push(node);
      }
    });
  }
};

BFS(1);

// function BFS예제() {
//   const graph = {
//     1: [2, 3, 8],
//     2: [1, 7],
//     3: [1, 4, 5],
//     4: [3, 5],
//     5: [3, 4],
//     6: [7],
//     7: [2, 6, 8],
//     8: [1, 7]
//   }

//   const visited = Array.from({ length: Object.keys(graph).length }, () => false);

//   const BFS = (graph, startNode, visited) => {
//     const queue = [startNode];
//     visited[startNode] = true;

//     while(queue.length > 0) {
//       const node = queue.shift();

//       console.log('node', node);

//       graph[node].forEach(linkedNode => {
//         if (!visited[linkedNode]) {
//           queue.push(linkedNode);
//           visited[linkedNode] = true;
//         }
//       });
//     }
//   }

//   BFS(graph, 1, visited);
// }

// BFS예제();

// // queue로 구현
