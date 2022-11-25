/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // if(head == null);
    // {
    //     return head;
    // }
    let nums = convertToArray(head);
    return trees(nums);
};

function trees(nums,start=0,end=nums.length-1){
    if(start <= end){
        let mid = Math.floor((start+end)/2);

        let root = new ListNode(nums[mid]);

        root.left = trees(nums,start,mid-1);
        root.right = trees(nums,mid+1,end);

        return root;
    }
    return null;
}

function convertToArray(head){
    let nums = [];
    let curr = head;
    while(curr){
        nums.push(curr.val);
        curr = curr.next;
    }
    return nums;
}