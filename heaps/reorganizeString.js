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

var reorganizeString = function (str) {
  let char_counter = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in char_counter) char_counter[str[i]]++;
    else char_counter[str[i]] = 1;
  }
  let comparator = (a, b) => {
    return a[1] > b[1];
  };
  let pq = new Heap(comparator);
  for (let key in char_counter) {
    pq.add([key, char_counter[key]]);
  }
  let result = "";
  let prev = [0, 0];
  while (pq.size() > 0) {
    let p = pq.peek();
    result += p[0];
    pq.poll();
    console.log(p);
    p[1]--;
    if (prev[1] != 0) pq.add(prev);
    prev = p;
  }
  return result.length == str.length ? result : "";
};

console.log(reorganizeString("aaabb"));
