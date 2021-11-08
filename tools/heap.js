// 최소힙
class Heap {
  constructor() {
    this.items = [];
  }

  swap(index_a, index_b) {
    [this.items[index_a], this.items[index_b]] = [this.items[index_b], this.items[index_a]];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  getParentNode(index) {
    const parentIndex = this.getParentIndex(index);
    return this.items[parentIndex];
  }

  getLeftChildNode(index) {
    const leftChildIndex = this.getLeftChildIndex(index);
    return this.items[leftChildIndex];
  }

  getRightChildNode(index) {
    const rightChildIndex = this.getRightChildIndex(index);
    return this.items[rightChildIndex];
  }

  getPeekValue() {
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

// 최소힙
class MinHeap extends Heap {
  bubbleUp() {
    let lastIndex = this.items.length - 1;

    while (this.getParentNode(lastIndex) && this.getParentNode(lastIndex) > this.items[lastIndex]) {
      this.swap(lastIndex, this.getParentIndex(lastIndex));

      lastIndex = this.getParentIndex(lastIndex);
    }
  }

  bubbleDown() {
    let index = 0;

    while (
      this.getLeftChildNode(index) && this.getLeftChildNode(index) < this.items[index]
      || this.getRightChildNode(index) && this.getRightChildNode(index) > this.items[index]
    ) {
      let smallIndex = this.getLeftChildIndex(index);

      if (this.getRightChildNode(index) && this.getRightChildNode(index) < this.items[smallIndex]) {
        smallIndex = this.getRightChildIndex(index);
      }

      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }

  heapPush(item) {
    // this.items[this.items.length] = item;
    this.items.push(item);
    this.bubbleUp();
  }

  heapPop() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }
}

// 최대힙
class MaxHeap extends Heap {
  bubbleUp() {
    let index = this.items.length - 1;

    while(this.getParentNode(index) && this.getParentNode(index) < this.items[index]){
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while(
      this.getLeftChildNode(index) && this.getLeftChildNode(index) > this.items[index]
    || this.getRightChildNode && this.getRightChildNode(index) > this.items[index]
    ) {
        let largerIndex = this.getLeftChildIndex(index);

        if(this.getRightChildNode(index) && this.getRightChildNode(index) > this.items[largerIndex]){
            largerIndex = this.getRightChildIndex(index);
        }

        this.swap(largerIndex, index);
        index = largerIndex;
    }
  }

  heapPush(item) {
    // this.items[this.items.length] = item;
    this.items.push(item);
    this.bubbleUp();
  }

  heapPop() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();

    return item;
  }
}

//최소 힙을 사용하는 코드
const minheap = new MinHeap();
minheap.heapPush(1);
minheap.heapPush(10);
minheap.heapPush(5);
minheap.heapPush(100);
minheap.heapPush(8);

console.log(minheap); //array(5) [1, 8, 5, 100, 10]
console.log(minheap.heapPop()); // 1
console.log(minheap.heapPop()); // 5
console.log(minheap.heapPop()); // 8
console.log(minheap.heapPop()); // 10
console.log(minheap.heapPop()); // 100
console.log(minheap); // array(0)


//최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
maxheap.heapPush(1);
maxheap.heapPush(10);
maxheap.heapPush(5);
maxheap.heapPush(100);
maxheap.heapPush(8);

console.log(maxheap); //array(5) [100, 10, 5, 1, 8]
console.log(maxheap.heapPop()); // 100
console.log(maxheap.heapPop()); // 10
console.log(maxheap.heapPop()); // 8
console.log(maxheap.heapPop()); // 5
console.log(maxheap.heapPop()); // 1
console.log(maxheap); // array(0)

