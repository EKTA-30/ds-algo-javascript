// Given a linked list and a value k, perform a right rotation such that the kth node reaches the end of the linked list..
// Input :
// 1,2,3,4,5,6
// k=3
// Output:
// 4,5,6,1,2,3

const SingleLL = require('./SingleLinkedList');

function rotate(head,k){
    if(head == null || head.next == null)
        return head;
    let temp = head;
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
    lastNode.next = head;

    head = lastNode;
    return head;
}

let singleLL = new SingleLL();

singleLL.append(1);
singleLL.append(2);
singleLL.append(3);
singleLL.append(4);
singleLL.append(5);
singleLL.append(6);


