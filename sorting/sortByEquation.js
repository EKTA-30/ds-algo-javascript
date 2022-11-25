// Problem Statement – Given a sorted array of n numbers. Your task is to apply an equation on each element and after
// applying, you need to sort it again.
// Equation is A*x*x + B*x + C
// Input: [ 1, 2, 3, 5, 6, 7 ], A = -1, B = -2, C = 3
// Output -> [ -60, -45, -32, -12, -5, 0]

function sortByEquation(nums, A, B, C) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = A * nums[i] * nums[i] + B * nums[i] + C;
  }
  let max = Number.NEGATIVE_INFINITY,
    maxIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
      maxIndex = i;
    }
  }

  let i = 0,
    j = nums.length - 1,
    k = 0;
  let newArr = new Array(nums.length);
  newArr.fill(0);
  while (i < maxIndex && j > maxIndex) {
    if (nums[i] < nums[j]) newArr[k++] = nums[i++];
    else newArr[k++] = nums[j--];
  }

  while (i < maxIndex) newArr[k++] = nums[i++];

  while (j > maxIndex) newArr[k++] = nums[j--];

  return newArr;
}

let nums = [ 1, 2, 3, 5, 6, 7 ], A = -1, B = -2, C = 3;
console.log(sortByEquation(nums,A,B,C));