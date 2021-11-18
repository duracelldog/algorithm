const v = 7; // 노드의 개수
const e = 9; // 간선의 개수
const parent = Array.from({ length: v + 1 }, () => 0);
const edges = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [4, 7, 13],
  [5, 6, 53],
  [6, 7, 25],
];
let result = 0;

const union_parent = (a, b) => {
  a = find_parent(a);
  b = find_parent(b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const find_parent = (x) => {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent[x]);
  }

  return parent[x];
};

for (let i = 1; i < v + 1; i++) {
  // 1~7
  parent[i] = i;
}

// console.log({ edges });
edges.sort((a, b) => a[2] - b[2]);
// console.log({ edges });

for (let edge of edges) {
  const [a, b, cost] = edge;

  if (find_parent(a) !== find_parent(b)) {
    union_parent(a, b);
    result += cost;
  }
}

console.log({ result });
