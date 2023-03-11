/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      right = middle - 1;
      middle = Math.floor((left + right) / 2);
    } else {
      left = middle + 1;
      middle = Math.floor((left + right) / 2);
    }
  }

  return -1;
};
