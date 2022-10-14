/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// The approach is to
//1.Divide the linked list in 2 halves using the middle pointer approach
// 1->2->3->4->null
// 5->6->7->8->null
//2.Reverse the second half
// 1->2->3->4->null
// 8->7->6->5->null

//3.Then pick alternate elements from each list
//1->8->2->7->3->6->4->5->null

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

var reorderList = function(head) {
    if(head == null || head.next == null)
        return;
    let slow = head,fast = head;
    
    //l1 is the head of the first half
    let l1 = head, prev = null;
    
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null;
    
    //l2 is the head of the second half
    let l2 = reverse(slow);
    
    merge(l1,l2);
    singleLL.printList(head);
    
};


function reverse(head){
    let temp = head, curr = null,prev = null;
    
    while(temp){
        prev = curr;
        curr = temp;
        temp = temp.next;
        curr.next = prev;
    }
    return curr;
}


function merge(l1,l2){
    while(l1 && l2){
        let l1_next = l1.next;
        let l2_next = l2.next;
        
        l1.next = l2;
        
        if(l1_next == null)
            break;
        l2.next = l1;
        l1 = l1_next;
        l2 = l2_next;
    }
}

let singleLL = new SingleLL();

let head = singleLL.append([1,2,3,4,5,6,7]);
reorderList(head);

singleLL.printList(head)