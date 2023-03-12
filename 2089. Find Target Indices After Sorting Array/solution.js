const targetIndices = (nums, target) => {
  let minIndex;
  for (let i = 0; i < nums.length - 1; i++) {
    minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }

  const includeIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      break;
    }
    if (nums[i] === target) {
      includeIndex.push(i);
    }
  }

  return includeIndex;
};
