function findFirstAndLast(arr,target,isFirstIndex){
    let s =0,e = arr.length-1,mid=0,ans=-1;
    while(s <= e){
        mid = parseInt(s + (e-s)/2);
        if(target < arr[mid])
        e = mid-1;
        else if(target > arr[mid])
        s = mid + 1;
        else{
            ans = mid;
            if(isFirstIndex)
                e = mid-1;
            else
                s = mid +1;
        }
    }
    return ans;
}

let arr = [1,2,3,7,7,7,9,12], target =7;
let start = findFirstAndLast(arr,target,true);
let end = findFirstAndLast(arr,target,false);

console.log(start, end);