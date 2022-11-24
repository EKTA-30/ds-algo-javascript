//Implementation of genric heap class in javaScript
class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator;
  }
  swap(index1, index2) {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }
  //Inserting data into heap
  bottomUp(index) {
    if (index === 0) return;
    const data = this.data;

    const parentIndex = Math.floor((index - 1) / 2);
    //data[index] > data[parentIndex];
    //data[index] < data[parentIndex];
    if (this.comparator(data[index], data[parentIndex])) {
      this.swap(parentIndex, index);
      this.bottomUp(parentIndex);
    }
  }
  size() {
    return this.data.length;
  }
  peek() {
    if (this.size() <= 0) return null;
    return this.data[0];
  }
  add(val) {
    this.data.push(val);
    this.bottomUp(this.data.length - 1);
  }
  // delete top element
  poll() {
    if (this.size() <= 0) return;

    if (this.size() === 1) {
      this.data.pop();
      return;
    }

    const data = this.data;
    data[0] = data[data.length - 1];
    data.pop();
    this.topBottom(0);
  }
  topBottom(index) {
    const n = this.data.length;
    const data = this.data;

    let nextIndexTochoose = index;
    const lefti = index * 2 + 1;
    const righti = lefti + 1;

    if (lefti < n && this.comparator(data[lefti], data[nextIndexTochoose])) {
      nextIndexTochoose = lefti;
    }

    if (righti < n && this.comparator(data[righti], data[nextIndexTochoose])) {
      nextIndexTochoose = righti;
    }

    if (nextIndexTochoose !== index) {
      this.swap(index, nextIndexTochoose);
      this.topBottom(nextIndexTochoose);
    }
  }
}

const comparator1 = (a,b) =>{
    return a < b;
}

const comparator2 = (a,b) => {
    return a > b;
}

// let minHeap = new Heap(comparator1);

// minHeap.add(23);
// minHeap.add(34);
// minHeap.add(45);
// minHeap.add(56);
// console.log("Min heap :  "+minHeap.data);

let maxHeap = new Heap(comparator2);
console.log();

maxHeap.add(6);
maxHeap.add(4);
maxHeap.add(2);
maxHeap.add(56);
console.log("Max heap : "+maxHeap.data);

while(maxHeap.size() >0){
  console.log(maxHeap.peek());
  maxHeap.poll();
}

