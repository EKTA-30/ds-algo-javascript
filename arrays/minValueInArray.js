function findMinValue(nums,index){
    if(nums.length === 1)
        return nums[0];
    if(index === nums.length - 2)
        return Math.min(nums[index],nums[index+1]);
    
    return Math.min(nums[index],findMinValue(nums,index+1));
}

console.log(findMinValue([1,4,2,-1,0,-3],0));