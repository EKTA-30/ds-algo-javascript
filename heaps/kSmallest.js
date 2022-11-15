class minHeap {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);

    if (this.heap.length == 1) return;
    let n = this.heap.length - 1;
    while (n > 0) {
      let parent = Math.floor((n - 1) / 2);
      if (this.heap[parent] < this.heap[n]) return;
      this.swap(parent, n);
      n = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return;
    let n = this.heap.length;
    let minVal = this.heap[0];
    let lastVal = this.heap.pop();

    if (!this.heap.length) return minVal;

    this.heap[0] = lastVal;

    let i = 0;

    while (i < this.heap.length) {
      let leftIndex = 2 * i + 1;
      let rightIndex = 2 * i + 2;
      let left = this.heap[leftIndex];
      let right = this.heap[rightIndex];
      //if it has no child
      if (leftIndex >= this.heap.length) break;
      //if only left child is present
      if (rightIndex >= this.heap.length) {
        //if child is less than node
        if (this.heap[leftIndex] > this.heap[i]) break;
        //if not swap
        this.swap(i, leftIndex);
        //set new child as current child
        n = leftIndex;
      } else {
        let smaller = left < right ? 2 * i + 1 : 2 * i + 2;
        if (this.heap[i] > this.heap[smaller]) {
          this.swap(i, smaller);
          i = smaller;
        } else {
          return;
        }
      }
    }
    return minVal;
  }
  printHeap() {
    for (let item of this.heap) console.log(item);
  }

  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }

  kthSmallestElement(k){
    if(k<1 || k >= this.heap.length){
        return "Invalid input of 'K', please enter a value in range"
    }
    let kSmallest = 0;
    let i=0;
    while(i<k){
         kSmallest = this.extractMin();
        i++;
    }
    return kSmallest;
  }

}

let heap = new minHeap();
heap.insert(34);
heap.insert(23);
heap.insert(45);
heap.insert(50);
heap.insert(56);
heap.insert(21);
heap.printHeap();

let kSmallest = heap.kthSmallestElement(3);
console.log();
console.log(kSmallest);
// console.log();
// heap.printHeap()