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

    mergeSort(head) {
      if(head == null || head.next == null)
          return head;

      let mid = this.findMiddleNode(head);
      let left = this.mergeSort(head);
      let right = this.mergeSort(mid);
  
      return this.mergeTwoSortedLinkedLists(left, right);
  }
    findMiddleNode(head){
      let midPrev = null;
      
     while(head && head.next){
        midPrev = (midPrev == null)? head:midPrev.next;
        head = head.next.next;
      }
      let mid = midPrev.next;
      midPrev.next = null;
      return mid;
    }
    mergeTwoSortedLinkedLists(list1,list2){
        let newLL = new Node(0);
        let head = newLL;
        
        while(list1 && list2){
            if(list1.data <= list2.data){
               head.next = list1;
                list1 = list1.next;
                head = head.next;
            }
            else{
                head.next = list2;
                list2 = list2.next;
                head = head.next;
            }
        }
        
        head.next = (list1 == null) ? list2:list1;
         return newLL.next;
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
let singleLL1 = new SingleLL();
let singleLL2 = new SingleLL();
  let arr1 = [4,2,1,3,9,0];
  // let arr2 = [1,3,4];

let list1 = singleLL1.append(arr1);
// let list2 = singleLL2.append(arr2);

let headNode = singleLL.mergeSort(list1);

// console.log(singleLL.findMiddleNode(headNOde).data);
singleLL.printList(headNode);

