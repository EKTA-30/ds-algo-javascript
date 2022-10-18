function subArrayMax(arr,k){
    let queue = [];
    let i;

    for(i = 0;i<k;i++){
        while(queue.length != 0 && arr[i] >= queue[queue.length -1] )
            queue.pop();

            queue.push(i);
    }

    for(;i<arr.length;i++){
        console.log(arr[queue[0]]);

        while(queue.length != 0 && queue[0] <= i-k)
            queue.shift();

        while(queue.length != 0 && arr[i] >= queue[queue.length -1] )
            queue.pop();

            queue.push(i);
    }
}

let arr = [1,3,-1,-3,5,3,6,7,8];
let k = 3

subArrayMax(arr,k)