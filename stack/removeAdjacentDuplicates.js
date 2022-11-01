function removeDuplicates(s) {
    if(s.length ==0 || s.length==1)
        return;
    let stack = [];
    let top = 0, output = "";
    stack.push(s[0]);
    for(i=1;i<s.length;i++){
        if(stack[top] == s[i]){
            stack.pop();
            top--;
        }
            else{
            stack.push(s[i]);
            top++;
            }
        
    }
    while(top >= 0){
        output = stack[top] + output;
        stack.pop();
        top--;
    }
    return output;
    
};
let str = "abbaca"
console.log(removeDuplicates(str));