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
}

// 최소힙
class MinHeap extends Heap {
  // 데이터를 추가 할떄 사용
  bubbleUp() {
    let lastIndex = this.items.length - 1;

    // 부모가 자식보다 값이 큰 경우 자리를 바꾼다 (최소힙 -> 부모가 작아야함)
    while (this.items[this.getParentIndex(lastIndex)] !== undefined && this.items[this.getParentIndex(lastIndex)] > this.items[lastIndex]) {
      this.swap(lastIndex, this.getParentIndex(lastIndex));

      lastIndex = this.getParentIndex(lastIndex);
    }
  }

  // 데이터를 추출할 때 사용
  bubbleDown() {
    let index = 0;

    // 자식이 부모보다 작을 경우 (최소힙 -> 부모가 작아야함)
    while (
      (this.items[this.getLeftChildIndex(index)] !== undefined && this.items[this.getLeftChildIndex(index)] < this.items[index])
      || (this.items[this.getRightChildIndex(index)] !== undefined && this.items[this.getRightChildIndex(index)] < this.items[index])
    ) {
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);
      const smallIndex = this.items[leftIndex] > this.items[rightIndex] ? rightIndex : leftIndex;

      this.swap(index, smallIndex);
      index = smallIndex;
    }
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    let item = this.items[0];

    if (this.items.length === 1) {
      this.items.pop();
    } else {
      this.items[0] = this.items.pop();
    }

    this.bubbleDown();

    return item;
  }
}

// 최대힙
class MaxHeap extends Heap {

  // 데이터를 추가 할떄 사용
  bubbleUp() {
    let index = this.items.length - 1;
    let parentIndex = this.getParentIndex(index);

    // 부모가 자식보다 작을때 자리를 바꾼다 (최대힙 -> 부모가 커야함)
    while(this.items[parentIndex] && this.items[parentIndex] < this.items[index]){
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
        parentIndex = this.getParentIndex(index);
    }
  }

  // 데이터를 추출할 때 사용
  bubbleDown() {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    // 자식이 부모보다 클때 자릴 바꾼다 (최대힙 -> 부모가 커야함)
    while(
      this.items[leftChildIndex] && this.items[leftChildIndex] > this.items[index]
    || this.items[rightChildIndex] && this.items[rightChildIndex] > this.items[index]
    ) {
        let largerIndex = this.getLeftChildIndex(index);

        if(this.items[rightChildIndex] && this.items[rightChildIndex] > this.items[largerIndex]){
          largerIndex = this.getRightChildIndex(index);
        }

        this.swap(largerIndex, index);
        index = largerIndex;
        leftChildIndex = this.getLeftChildIndex(index);
        rightChildIndex = this.getRightChildIndex(index);
    }
  }

  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    let item = this.items[0];

    if (this.items.length === 1) {
      this.items.pop();
    } else {
      this.items[0] = this.items.pop();
    }

    this.bubbleDown();

    return item;
  }
}

//최소 힙을 사용하는 코드
const minheap = new MinHeap();
minheap.push(1);
minheap.push(10);
minheap.push(5);
minheap.push(100);
minheap.push(8);

console.log(minheap); //array(5) [1, 8, 5, 100, 10]
console.log(minheap.pop()); // 1
console.log(minheap.pop()); // 5
console.log(minheap.pop()); // 8
console.log(minheap.pop()); // 10
console.log(minheap.pop()); // 100
console.log(minheap); // array(0)


//최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
maxheap.push(1);
maxheap.push(10);
maxheap.push(5);
maxheap.push(100);
maxheap.push(8);

console.log(maxheap); //array(5) [100, 10, 5, 1, 8]
console.log(maxheap.pop()); // 100
console.log(maxheap.pop()); // 10
console.log(maxheap.pop()); // 8
console.log(maxheap.pop()); // 5
console.log(maxheap.pop()); // 1
console.log(maxheap); // array(0)

