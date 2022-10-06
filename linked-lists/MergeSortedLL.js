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
        while(list1)
        {
            head.next = list1;
            list1 = list1.next;
            head = head.next;
        }
        
        while(list2)
        {
            head.next = list2;
            list2 = list2.next;
            head = head.next;
        }
        
         this.printList(newLL);
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
  let arr1 = [1,2,3];
  let arr2 = [1,3,4];

let list1 = singleLL1.append(arr1);
let list2 = singleLL2.append(arr2);

singleLL.mergeTwoSortedLinkedLists(list1,list2);

