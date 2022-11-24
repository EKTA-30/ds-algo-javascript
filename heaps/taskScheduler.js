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

var leastInterval = function (tasks, n) {
  //counting and storing the frequency of each type of task
  let frequency = {};
  for (let task of tasks) {
    if (task in frequency) frequency[task]++;
    else frequency[task] = 1;
  }

  let comparator = (a, b) => {
    return a[1] > b[1];
  };
  let maxHeap = new Heap(comparator);

  for (let key in frequency) {
    maxHeap.add([key, frequency[key]]);
  }
  // console.log(frequency);
  // console.log(maxHeap);

  let result = [];
  while (maxHeap.size() > 0) {
    let addBack = [];
    //Once we added a task in the CPU we have to make sure that we do not add it again until n time uints
    for (let i = 0; i <= n; i++) {
      if (maxHeap.size() > 0) {
        let root = maxHeap.peek();
        result.push(root[0]);
        maxHeap.poll(); 
        root[1]--;
        if (root[1] > 0) 
          addBack.push(root);
      } else 
        result.push("idle");
    
      if (maxHeap.size() == 0 && addBack.length == 0)
        break;
    }
    //whatever tasks are still remaining we add it back to our maxHeap.
    for (let i in addBack) {
      maxHeap.add(addBack[i]);
    }
  }
  return result.length;
};
 
const emp = ["A", "A", "A", "B", "B", "B", "B"];
let result = leastInterval(emp, 2);
// for(let res of result)
// console.log(res);
console.log(result);
