class maxHeap {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);

    if (this.heap.length == 1) return;
    let n = this.heap.length - 1;
    while (n > 0) {
      let parent = Math.floor((n - 1) / 2);
      if (this.heap[parent] > this.heap[n]) return;
      this.swap(parent, n);
      n = parent;
    }
  }

  extractMax() {
    if (this.heap.length === 0) return;
    let n = this.heap.length;
    let maxVal = this.heap[0];
    let lastVal = this.heap.pop();

    if (!this.heap.length) return maxVal;

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
        if (this.heap[leftIndex] < this.heap[i]) break;
        //if not swap
        this.swap(i, leftIndex);
        //set new child as current child
        n = leftIndex;
      } else {
        let larger = left > right ? 2 * i + 1 : 2 * i + 2;
        if (this.heap[i] < this.heap[larger]) {
          this.swap(i, larger);
          i = larger;
        } else {
          return;
        }
      }
    }
    return maxVal;
  }
  printHeap() {
    for (let item of this.heap) console.log(item);
  }

  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }

  kLargestElement(k){
      if(k<1 || k >= this.heap.length){
        return "Invalid input of 'K', please enter a value in range"
    }
    let kLargest = 0;
    let i=0;
    while(i<k){
         kLargest = this.extractMax();
        i++;
    }
    return kLargest;
  }
}

let heap = new maxHeap();
heap.insert(34);
heap.insert(23);
heap.insert(45);
heap.insert(50);
heap.insert(56);
heap.insert(21);
heap.printHeap();
console.log();

let kLargest = heap.kLargestElement(2);
console.log(kLargest);
// console.log();
// heap.printHeap();