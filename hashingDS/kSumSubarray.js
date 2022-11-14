function kSumSubarrayCount(arr,k){
    let map = new Map();
    let prefixSum = 0, count = 0;
    map.set(0,1);

    for(let i=0;i<arr.length;i++){
        prefixSum += arr[i];
        if(map.has(prefixSum-k)){
            count += map.get(prefixSum-k);
        }
        if(map.has(prefixSum)){
            map.set(prefixSum,map.get(prefixSum)+1);
        }
        else
        {
            map.set(prefixSum,1);
        }
    }
    return count;
}

let arr = [3,9,-2,4,1,-7,2,6,-5,8,-3,-7,6,2,1];
let k = 5;

console.log(kSumSubarrayCount(arr,k));