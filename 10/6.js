const v = 7; // 노드의 개수
const e = 8; // 간선의 개수

const indegree = Array.from({ length: v + 1 }, () => 0); // 진입차수 0으로 초기화
const inputs = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 7],
  [5, 6],
  [6, 4]
]

const graph = Array.from({ length: v + 1 }, () => []);
const orders = Array.from({ length: v + 1 }, () => 0);
const result = [];

inputs.forEach(([node1, node2]) => {
  graph[node1].push(node2);
});

graph.forEach((nodes) => {
  nodes.forEach((node) => {
    orders[node] += 1;
  })
});

const queue = [];

orders.forEach((value, index) => {
  if (value === 0) {
    queue.push(index);
  }
})

while (queue.length) {
  const target = queue.shift();
  result.push(target);

  graph[target].forEach((node) => {
    orders[node] -= 1;

    if (orders[node] === 0) {
      queue.push(node);
    }
  })
}

console.log({ graph, orders, queue, result });



// const v = 7; // 노드의 개수
// const e = 8; // 간선의 개수

// const indegree = Array.from({ length: v + 1 }, () => 0); // 진입차수 0으로 초기화
// const graph = [
//   [],
//   [2, 5],
//   [3, 6],
//   [4],
//   [7],
//   [6],
//   [4],
//   []
// ];

// graph.forEach((a) => {
//   a.forEach((b) => {
//     indegree[b] += 1;
//   });
// });

// const topology_sort = () => {
//   const result = [];
//   const q = [];

//   for (let i = 1; i < v + 1; i++) {
//     if (indegree[i] == 0) {
//       q.push(i);
//     }
//   }

//   while (q.length) {
//     const now = q.shift();

//     result.push(now);

//     graph[now].forEach((val) => {
//       indegree[val] -= 1;

//       if (indegree[val] === 0) {
//         q.push(val);
//       }
//     });

//     // for (let val of graph[now]) {
//     //   indegree[val] -= 1;

//     //   if (indegree[val] === 0) {
//     //     q.push(val);
//     //   }
//     // }
//   }

//   console.log({ result });
// };

// topology_sort();
