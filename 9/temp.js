class Heap {
  constructor() {
    this.items = [];
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return (index * 2) + 1;
  }

  getRightChildIndex(index) {
    return (index * 2) + 2;
  }
}

class MinHeap extends Heap {
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    const item = this.items[0];

    if (this.items.length === 1) {
      this.items.pop();
    } else {
      this.items[0] = this.items.pop();
    }

    this.bubbleDown();

    return item;
  }

  bubbleUp() {
    let index = this.items.length - 1;

    while(
      this.items[this.getParentIndex(index)]?.value !== undefined && this.items[index].value < this.items[this.getParentIndex(index)].value
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while(
      this.items[this.getLeftChildIndex(index)]?.value !== undefined && this.items[index].value > this.items[this.getLeftChildIndex(index)].value ||
      this.items[this.getRightChildIndex(index)]?.value !== undefined && this.items[index].value > this.items[this.getRightChildIndex(index)].value
    ) {
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);
      const smallIndex = this.items[leftIndex].value > this.items[rightIndex].value ? rightIndex : leftIndex;

      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }
}

const INF = 99999999;
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

const distance = Array.from({ length: graph.length }, () => INF);

const 다익스트리 = (start) => {
  const heap = new MinHeap();
  distance[start] = 0;

  heap.push({
    value: 0,
    nodeIndex: start
  });

  while(heap.items.length > 0) {
    const { value, nodeIndex } = heap.pop();

    if (distance[nodeIndex] < value) {
      continue;
    }

    graph[nodeIndex].forEach(val => {
      const cost = value + val[1];

      if (cost < distance[val[0]]) {
        distance[val[0]] = cost;
        heap.push({
          value: cost,
          nodeIndex: val[0]
        })
      }
    });
  }
}

다익스트리(1);

distance.forEach(dist => {
  if (dist === INF) {
    console.log('INFINITY');
  } else {
    console.log(dist);
  }
});