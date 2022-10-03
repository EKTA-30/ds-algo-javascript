function binarySearch(arr,target){
    let start =0,end =arr.length,mid = 0;
    while(start <= end){
        mid = parseInt (start + (end-start)/2);
        if(arr[mid] === target)
            return mid;
        else if(target < arr[mid])
            end = mid - 1;
        else
            start = mid +1;
    }
    return -1;
}


let arr = [1,2,3,4,5,6,7];
let target = 14;
console.log(binarySearch(arr,target));