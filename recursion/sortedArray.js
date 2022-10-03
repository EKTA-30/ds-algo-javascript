// function checkSortedArray(nums,n){
//     //base case
//     if(n === 1 || n==0)
//     return true;

//     // self- work
//     let isSorted = checkSortedArray(nums, n-1);

//     //recursive call
//     return nums[n-1] >= nums[n-2] && isSorted;
// }

// let nums = [5,7,1,5];
// console.log(checkSortedArray(nums,4));

const isSorted = (arr , index) => {
      // BASE Condition
    if (index === arr.length-1) {
      return true;
    }
     return  arr[index] <= arr[index + 1] && isSorted(arr, index + 1);
  };
  
  console.log(isSorted([1, 2, 3, 6, 7,5,6,7], 0));