function sortSimilarElements(arr,nums){
    let i=0,j=0, ans = [];
    while(i<nums.length && j<arr.length){
        if(arr.includes(nums[i])){
            ans.push(nums[i]);
        }
        i++;
        j++;
    }
    console.log(ans);
}


let nums = [-2 ,-1, 0, 1, 4]
let arr = [-3 ,-2 ,-1, 1, 2, 3]
console.log(sortSimilarElements(nums,arr));