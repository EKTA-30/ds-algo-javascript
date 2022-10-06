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
  append(dataSet) {
    for (let data of dataSet) {
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
    this.printList(this.head)
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

function reverseLinkedList(head) {
  let temp = head,
    prev = null,
    curr = null;

  while (temp) {
    prev = curr;
    curr = temp;
    temp = temp.next;
    curr.next = prev;
  }

  return singleLL.printList(curr);
}

let singleLL = new SingleLL();

let head = singleLL.append([1, 2, 3, 4, 5, 6]);

reverseLinkedList(head)
