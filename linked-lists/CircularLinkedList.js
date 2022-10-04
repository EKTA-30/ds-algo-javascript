class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLL {
  constructor() {
    this.tail = null;
    this.length = 0;
  }

  prepend(val) {
    let node = new Node(val);
    if (!this.tail) {
      this.tail = node;
      this.tail.next = node;
      this.length++;
      this.printList();
    } else {
      let current = this.tail.next;
      node.next = current.next;
      current.next = node;
      this.length++;
      this.printList();
    }
  }
  removeAt(index) {
    //   if index is 0
    if (index == 0) {
      if (!this.tail.next) {
        return false;
      }
      let current = this.tail.next;
      this.tail.next = current.next;
      current = null;

      this.length--;
    } else if (index < 0 || index >= this.length) {
      console.log('Array index out of bounds enter valid index');
    } else {
      let current, previous;
//   current is set to head which is at tail.next
      current = this.tail.next;
      let count = 0;
      while (count < index) {
        count++;
        previous = current; // set previous to current
        current = current.next; // set current to next of current
      }

      previous.next = current.next; // set next of previous to next of current
      current = null; // set current element to be deleted as null

      this.length--;
    }
  }

}
let circularll = new CircularLL();

circularll.prepend(1);
circularll.prepend(2);
circularll.prepend(3);
circularll.prepend(4);
circularll.prepend(5);
circularll.prepend(6);

