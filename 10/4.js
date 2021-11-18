const v = 3; // 노드의 개수
const e = 3; // 간선의 개수
const 간선정보 = [
  [1, 2],
  [1, 3],
  [2, 3],
];

let cycle = false;
const parent = Array.from({ length: v + 1 }, () => 0);

const find_parent = (x) => {
  if (parent[x] !== x) {
    parent[x] = find_parent(parent[x]);
  }

  return parent[x];
};

const union_parent = (a, b) => {
  a = find_parent(a);
  b = find_parent(b);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

for (let i = 1; i < v + 1; i++) {
  // 1~3
  parent[i] = i;
}

for (let val of 간선정보) {
  if (find_parent(val[0]) === find_parent(val[1])) {
    cycle = true;
    break;
  } else {
    union_parent(val[0], val[1]);
  }
}

if (cycle) {
  console.log("사이클 발생");
} else {
  console.log("사이클 발생 안함");
}
