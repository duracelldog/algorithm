const n = 3; // 도시의 개수
const m = 2; // 통로의 개수
const start = 1; // 시작 지점
const INF = 9999999;

const data = [
  [1, 2, 4], // 1 => 2 까지 가는데 4시간 걸린다
  [1, 3, 2],
];

const visited = Array.from({ length: n + 1 }, () => false);
const costs = Array.from({ length: n + 1 }, () => INF);
const graph = Array.from({ length: n + 1 }, () => []);

data.forEach(([index1, index2, cost]) => {
  graph[index1].push([index2, cost]);
});

const getSmallIndex = () => {
  let smallIndex = 0;
  let smallCost = INF;

  costs.forEach((cost, index) => {
    if (cost < smallCost && !visited[index]) {
      smallCost = cost;
      smallIndex = index;
    }
  });

  return smallIndex;
};

visited[start] = true;
costs[start] = 0;

graph[start].forEach(([subIndex, subCost]) => {
  costs[subIndex] = subCost;
});

for (let i = 0; i < n; i++) {
  const smallIndex = getSmallIndex();

  visited[smallIndex] = true;

  graph[smallIndex].forEach(([subIndex, subCost]) => {
    const totalCost = costs[smallIndex] + subCost;

    if (totalCost < costs[subIndex]) {
      costs[subIndex] = totalCost;
    }
  });
}

const linked = costs.filter((val) => val !== INF && val !== 0).length;
const times = costs.filter((val) => val !== INF);

console.log(linked, Math.max(...times));
