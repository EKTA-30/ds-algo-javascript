// Problem Statement – Given an array of n numbers and a number k. Your task is to select k numbers from an array such
// that the absolute difference between selected k numbers and remaining numbers is maximum.
// Print the maximum absolute difference as output.
// Input: [18, 4, 15, 12, 10 ]
// Output - 31
//

function maxWeightDiffernece(weights, k) {
  if (weights.length === 0) return 0;
  //calculate the total sum
  let sum = 0;
  for (let weight of weights) sum += weight;
  //   console.log(sum);
  //sort the array and caculate the sum of first k elements and last k elements
  weights.sort((a, b) => a - b);
  let sumKSmallest = 0,
    sumKLargest = 0;

  for (let i = 0; i < k; i++) {
    sumKSmallest += nums[i];
  }
  //last k elements sum
  for (let i = nums.length - 1; i >= nums.length - k; i--) {
    sumKLargest += nums[i];
  }

  //   console.log(sumKSmallest,sum,sum-sumKSmallest);
  //   console.log( sumKLargest,sum,sum-sumKLargest);

  return Math.max(
    Math.abs(sumKSmallest - (sum - sumKSmallest)),
    Math.abs(sumKLargest - (sum - sumKLargest))
  );

  // [18, 4, 15, 12, 10]
  //[4,10,12,15,18] when k = 3. first kSum = 4+10+12 =26
  //last k sum = 23+30 = 15+10 = 35
  //total sum = 59
}

let nums = [18, 4, 15, 12, 10],
  k = 3;
// maxWeightDiffernece(nums, k)
console.log(maxWeightDiffernece(nums, k));
