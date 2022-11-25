/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA.next == null && headB.next == null)
        return headA;
    let len1 = len(headA);
    let len2 = len(headB);
    let temp1 = headA, temp2 = headB;

    if(len1 > len2){
        let k = len1 - len2;
        while(k > 0){
            temp1 = temp1.next;
            k--;
        }
    }
    else{
        k = len2-len1;
        while(k > 0){
            temp2 = temp2.next;
            k--;
        }

    }

    while(temp1 !== temp2){
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return temp1;

};
function len(head){
    let count = 0;

    while(head){
        count++;
        head = head.next;
    }
    return count;
}

