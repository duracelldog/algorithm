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
    let parentIndex = this.getParentIndex(lastIndex);

    // 부모가 자식보다 값이 큰 경우 자리를 바꾼다 (최소힙 -> 부모가 작아야함)
    while (this.items[parentIndex]?.value !== undefined && this.items[parentIndex].value > this.items[lastIndex].value) {
      this.swap(lastIndex, this.getParentIndex(lastIndex));

      lastIndex = this.getParentIndex(lastIndex);
      parentIndex = this.getParentIndex(lastIndex);
    }
  }

  // 데이터를 추출할 때 사용
  bubbleDown() {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    // 자식이 부모보다 작을 경우 (최소힙 -> 부모가 작아야함)
    while (
      (this.items[leftChildIndex]?.value !== undefined && this.items[leftChildIndex].value < this.items[index].value)
      || (this.items[rightChildIndex]?.value !== undefined && this.items[rightChildIndex].value < this.items[index].value)
    ) {
      let smallIndex = this.getLeftChildIndex(index);

      if (this.items[rightChildIndex]?.value !== undefined && this.items[rightChildIndex].value < this.items[smallIndex].value) {
        smallIndex = this.getRightChildIndex(index);
      }

      this.swap(index, smallIndex);
      index = smallIndex;
      leftChildIndex = this.getLeftChildIndex(smallIndex);
      rightChildIndex = this.getRightChildIndex(smallIndex);
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
    while(this.items[parentIndex]?.value !== undefined && this.items[parentIndex].value < this.items[index].value){
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
      this.items[leftChildIndex]?.value !== undefined && this.items[leftChildIndex].value > this.items[index].value
    || this.items[rightChildIndex]?.value !== undefined && this.items[rightChildIndex].value > this.items[index].value
    ) {
        let largerIndex = this.getLeftChildIndex(index);

        if(this.items[rightChildIndex]?.value && this.items[rightChildIndex].value > this.items[largerIndex].value){
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
minheap.push({value: 0, name: '노드1'});
minheap.push({value: 2, name: '노드2'});
minheap.push({value: 1, name: '노드4'});
minheap.push({value: 6, name: '노드5'});
minheap.push({value: 5, name: '노드3'});

console.log(minheap);
console.log(minheap.pop());
console.log(minheap.pop());
console.log(minheap.pop());
console.log(minheap.pop());
console.log(minheap.pop());
console.log(minheap);


// //최대 힙을 사용하는 코드
const maxheap = new MaxHeap();
maxheap.push({value: 0, name: '노드1'});
maxheap.push({value: 2, name: '노드2'});
maxheap.push({value: 1, name: '노드4'});
maxheap.push({value: 6, name: '노드5'});
maxheap.push({value: 5, name: '노드3'});

console.log(maxheap);
console.log(maxheap.pop());
console.log(maxheap.pop());
console.log(maxheap.pop());
console.log(maxheap.pop());
console.log(maxheap.pop());
console.log(maxheap);

