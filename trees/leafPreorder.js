function printLeafNodeFromPreorder(preorder){
    let ans = []
    let stack = [];
    stack.push(preorder[0]);

    for(let i =1;i<preorder.length;i++){
        if(preorder[i] < stack[stack.length-1]){
            // console.log(curr, stack[n-1]);
            stack.push(preorder[i]);
            // console.log(ans);
        }
        else{
            let temp = stack[stack.length-1];
            let removedCount = 0;
            while(stack.length > 0 && stack[stack.length-1]<preorder[i]){
                stack.pop();
                removedCount++;
            }
            stack.push(preorder[i]);
            if(removedCount >=2 )
                ans.push(temp);
        }
    }
    ans.push(stack[stack.length-1]);
    return ans;
}

let preorder = [5,3,2,4,7,6,8];
let ans = printLeafNodeFromPreorder(preorder);
console.log(ans);