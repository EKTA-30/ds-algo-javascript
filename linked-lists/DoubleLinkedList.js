class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
    this.printList(this.head);
  }
  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    this.printList(this.head);
  }

  insertAtGivenPosition(data, pos) {
    if (pos < 0 || pos > this.length) {
      console.log("Invalid position,cannot insert");
      return;
    }
    if (pos == 0) return this.prepend(data);

    if (pos == this.length) return this.append(data);

    else{
        let newNode = new Node(data);
        let count =0, temp = this.head;
        while(count < pos-1){
            count++;
            temp = temp.next;
        }
        newNode.prev = temp;
        newNode.next = temp.next;
        temp.next.prev = newNode;
        temp.next = newNode;
        this.length++;
        this.printList(this.head);
    }
  }

  removeNodeFromStart(){
    if (!this.head) {
       console.log("No nodes to delete");
       return;
      }
      if(this.length ==1){
        this.head = null;
        this.tail = null;
        this.length--;
        return;
      }
      else{
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        console.log(`After remving a node from start`);
        this.printList(this.head);
      }
  }

  removeNodeFromEnd(){
    if (!this.head) {
       console.log("No nodes to delete");
       return;
      }
      if(this.length ==1){
        this.head = null;
        this.tail = null;
        this.length--;
        return;
      }
      else{
        this.tail = this.tail.prev;
        this.tail.next.prev = null;
        this.tail.next = null;
        this.length--;
        console.log(`After remving a node from start`);
        this.printList(this.head);
      }
  }

  removeNodeFromPosition(pos){

    if(pos < 0 || pos > this.length){
        console.log("Invalid posotion cannot delete node");
        return;
    }
    if(pos == 0)
    return this.removeNodeFromStart();

    if(pos == this.length)
    return this.removeNodeFromEnd();

    else{
        let count =0,temp = this.head;

        while(count < pos-1){
            count++;
            temp = temp.next;
        }
        temp.next = temp.next.next;
        let newNext = temp.next;
        newNext.prev = newNext.prev.prev;
        this.length--;

        console.log(`After removing node from position ${pos}`);
        this.printList(this.head);
    }
  }

  printList(head) {
    let temp = head,
      output = "";
    while (temp) {
      output = output + temp.data + " <----> ";
      temp = temp.next;
    }
    output += " null ";
    console.log(output);
  }
}

let doubll = new DoubleLL();
doubll.insertAtGivenPosition(1,0);
doubll.insertAtGivenPosition(2,1);
doubll.insertAtGivenPosition(3,2);
doubll.insertAtGivenPosition(4,3);
doubll.insertAtGivenPosition(0,3)
doubll.removeNodeFromPosition(0);
doubll.removeNodeFromPosition(1);
