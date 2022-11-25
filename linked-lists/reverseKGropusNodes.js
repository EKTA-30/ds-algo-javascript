 /* Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k==1 || head == null)
        return head;
    let dummy = new ListNode(0);
    dummy.next = head;

    let curr = dummy, prev = dummy, nex=dummy;

    let count = 0;
    while(curr.next != null){
        curr = curr.next;
        count++;
    }
    while(count >= k){
        curr = prev.next;
        nex = curr.next;

        for(let i=1;i<k;i++){
            curr.next = nex.next;
            nex.next = prev.next;
            prev.next = nex;
            nex = curr.next;
        }
        prev = curr;
        count -= k;
    }
    return dummy.next;
};