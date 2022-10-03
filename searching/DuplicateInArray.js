//Non-recursive approach
function isDuplicateInArray(nums, N){
    if(N < 0)
        return false;
    
    let start =0,end = nums.length;
    while(start <= end){
        let mid = parseInt(start + (end-start)/2);
        if(N == nums[mid]){
            if(mid > 0 && nums[mid-1] == N || mid<nums.length-1 && nums[mid+1]==N)
                return true;
        }
        else if(N < nums[mid])
            end = mid-1;
        else
            start = mid+1;
    }
    return false;
    
}

//Recursive approach
function isDuplicateRecursive(nums, N,start,end){
    if(start > end)
        return false;
        let mid = parseInt(start + (end-start)/2);
        if(N == nums[mid]){
            if(mid > 0 && nums[mid-1] == N || mid<nums.length-1 && nums[mid+1]==N)
                return true;
        }
        else if(N < nums[mid])
        return isDuplicateRecursive(nums, N,start,mid-1);

        return isDuplicateRecursive(nums, N,mid+1,end)
    }
    let nums =   [1,3,5,5,9,9,9];
    console.log(isDuplicateRecursive(nums, 9,0,nums.length-1));