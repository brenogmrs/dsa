function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let temp = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  temp = maxSum;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, temp);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
