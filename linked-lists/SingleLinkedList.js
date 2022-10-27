class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SingleLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  prepend(data) {
    if (this.head == null) {
      let newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    //    this.printList(this.head);
  }

  append(data) {
    if (this.head == null) {
      let newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    // this.printList(this.head)
  }
  
  appendDataSet(dataSet) {
   for(let data of dataSet){
    if (this.head == null) {
      let newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
   }
    return this.head;
  }
  insertNodeAtPosition(pos, data) {
    if (pos < 1 || pos > this.length + 1) {
      console.log("Invalid position");
      return;
    }
    if (pos == 1) this.prepend(data);
    else if (pos == this.length + 1) this.append(data);
    else {
      let count = 1,
        temp = this.head;
      while (count < pos - 1) {
        pos++;
        temp = temp.next;
      }
      this.length++;
      let newNode = new Node(data);
      newNode.next = temp.next;
      temp.next = newNode;
    }
    this.printList(this.head);
    // console.log(this.length);
  }

  removeFromStart() {
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      this.head = this.head.next;
      this.length--;
      console.log("After deleting a node from start");
      this.printList(this.head);
    }
  }

  removeFromLast() {
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    let temp = this.head;

    while (temp.next.next != null) {
      temp = temp.next;
    }
    this.tail = temp;
    this.tail.next = null;
    this.length--;
    console.log("After deleting a node from end");
    this.printList(this.head);
  }

  removeFromAPos(pos){
    if(pos == 1)
    this.removeFromStart();

    else if(pos == this.length)
    {
        console.log(this.length);
        this.removeFromLast();
        console.log(this.length);
    }

    else{
        if(pos <1 || pos > this.length)
        {
            console.log("Invalid position cannot delete node");
            return;
        }
        let count =1, temp = this.head;

        while(count < pos-1)
            temp = temp.next;
        let toBeDeleted = temp.next;

        temp.next = toBeDeleted.next;
        toBeDeleted.next = null;
        this.length--;
        console.log(`After deleting the node at position ${pos}`);
        this.printList(this.head)
    }
  }
  rotate(head,k){
    if(this.head == null || this.head.next == null)
        return head;
    let temp = this.head;
    let count =1;
    while(count < k){
        temp = temp.next;
        count++;
    } 

    let kthNode = temp;
    let newHead = kthNode.next;
    while(temp.next){
        temp = temp.next;
    }
    let lastNode = temp;

    kthNode.next = null;
    lastNode.next = this.head;

    this.head = lastNode;
    return this.head;
}

  printList(head) {
    let temp = head,
      output = "";
    while (temp) {
      output = output + temp.data + " --> ";
      temp = temp.next;
    }
    console.log(output + "null");
  }
}

let singleLL = new SingleLL();
let head = singleLL.appendDataSet([1,2,3,4,5,6]);
singleLL.printList(head);
let rotatedHead = singleLL.rotate(head,3);
singleLL.printList(rotatedHead);


// module.exports = {SingleLL};
