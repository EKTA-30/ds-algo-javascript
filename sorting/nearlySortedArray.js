// Problem Statement – Given an array of n numbers . Each element in the array is at maximum k distance from its actual
// position. Your task is to sort this kind of array with minimum time, where n = number of elements and k = distance from its
// actual position
// Input: [19, 18, 17, 14, 70, 60, 50]
// Output - [14, 17, 18, 19, 50, 60, 70]
//k = 3
//add first k+1 elements in the min heap, theN  start popping elements and add the into the array.
//Time complexity --> O(Nlogk)
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

function sortNearlySortedArray(nums, k) {
  // if(nums.length === 0 || k === 0)
  //     return;

  const comparartor = (a, b) => {
    return a < b;
  };
  let minHeap = new Heap(comparartor);
  for (let i = 0; i < k + 1; i++) {
    minHeap.add(nums[i]);
  }
  let index = 0;
  for (let i = k + 1; i < nums.length; i++) {
    nums[index++] = minHeap.peek();
    minHeap.poll();
    minHeap.add(nums[i]);
  }

  while (minHeap.size() != 0) {
    nums[index++] = minHeap.peek();
    minHeap.poll();
  }
}

let input = [19, 18, 17, 14, 70, 60, 50],
  k = 3;
console.log(input);
sortNearlySortedArray(input, k);
console.log(input);
