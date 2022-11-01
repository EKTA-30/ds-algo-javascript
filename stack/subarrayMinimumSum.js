function sumSubarrayMins(arr) {
    let M = Math.pow(10, 9) + 7;
    let PLE = new Array(arr.length).fill(-1);
    let NLE = new Array(arr.length).fill(arr.length);
    findPLE(PLE,arr);
    findNLE(NLE, arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum = (sum + (i-PLE[i]) * (NLE[i]-i) * arr[i]) % M;
    }
    return sum;
    // T.C: O(N)
    // S.C: O(N)
   };
   
   function findPLE(PLE, arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0
    && arr[stack[stack.length-1]] >= arr[i]) {
    stack.pop();
    }
    if (stack.length > 0) {
    PLE[i] = stack[stack.length-1];
    }
    stack.push(i);
    }
   }

   function findNLE(NLE, arr) {
    let stack = [];
    for (let i = arr.length-1; i >= 0; i--) {
    while (stack.length > 0
    && arr[stack[stack.length-1]] > arr[i]) {
    stack.pop();
    }
    if (stack.length > 0) {
    NLE[i] = stack[stack.length-1];
    }
    stack.push(i);
    }
   }
   

    let arr = [3,1,2,4];
    let minSum = sumSubarrayMins(arr);
    console.log(minSum);