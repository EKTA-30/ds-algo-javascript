// /**
//  * @param {number[]} pushed
//  * @param {number[]} popped
//  * @return {boolean}
//  */
// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.
// Example 1:
// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4),
// pop() -> 4,
// push(5),
// pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

// Example 2:
// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.

var validateStackSequences = function(pushed, popped) {
    let input = [],output = [];
    for(let i = 0;i<pushed.length;i++){
        input[i] = pushed[i];
        output[i] = popped[i];
    }

    let stack = [];
    while(input.length > 0){
        let element = input.shift();
        if(element === output[0]){
            output.shift();
            while(stack.length > 0){
                if(stack[stack.length-1] === output[0]){
                    stack.pop();
                    output.shift();
                }
                else{
                    break;
                }
            }
        }
        else{
            stack.push(element);
        }
    }
    return stack.length === 0 && input.length === 0;
};

let pushed = [1,2,3,4,5];
let popped = [4,3,5,1,2];

console.log(validateStackSequences(pushed,popped));
