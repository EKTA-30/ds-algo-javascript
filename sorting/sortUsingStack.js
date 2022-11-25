// Problem Statement - Given an array. Your task is to sort it using Stack.
// For example –
// Input – [2, 4, 1, 12, 14, 25, 35]
// Output – [1, 2, 4, 12, 14, 25, 35]

function sortUsingStack(arr){
    let stack1 = [] , stack2 = [];
    
    for(let num of arr){
        stack1.push(num);
    }

    for(let i=0;i<arr.length;i++){

        while(stack1.length > 0 && stack1[stack1.length-1] < arr[i]){
                stack2.push(stack1.pop());
        }

        stack1.push(arr[i]);

    }

}

