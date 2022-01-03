const v = 6; // 노드의 개수
const e = 4; // 간선의 개수
const 간선정보 = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];

const parents = Array.from({ length: v + 1 }, (_, k) => k);

const findParent = (x) => {
  if (parents[x] === x) {
    return x;
  }

  return findParent(parents[x]);
};

간선정보.forEach(([node1, node2]) => {
  const parent1 = findParent(node1);
  const parent2 = findParent(node2);

  if (parent1 < parent2) {
    parents[parent2] = parent1;
  } else {
    parents[parent1] = parent2;
  }
});

console.log({ parents });

// const v = 6; // 노드의 개수
// const e = 4; // 간선의 개수
// const 간선정보 = [
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [5, 6],
// ];

// const parent = Array.from({ length: v + 1 }, () => 0);

// // 일반
// // const find_parent = (x) => {
// //   if (parent[x] !== x) {
// //     return find_parent(parent[x]);
// //   }

// //   return x;
// // }

// // 경로 압축 기법
// const find_parent = (x) => {
//   if (parent[x] !== x) {
//     parent[x] = find_parent(parent[x]);
//   }

//   return parent[x];
// };

// for (let i = 1; i < v + 1; i++) {
//   // 1~6
//   parent[i] = i;
// }

// // [0, 1, 2, 3, 4, 5, 6]

// 간선정보.forEach((val) => {
//   val[0] = find_parent(val[0]);
//   val[1] = find_parent(val[1]);

//   if (val[0] < val[1]) {
//     parent[val[1]] = val[0];
//   } else {
//     parent[val[0]] = val[1];
//   }
// });

// const endPoint = parent.map((val) => find_parent(val));

// console.log({ parent, endPoint });
