class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> lists = new ArrayList<>();
    if (nums.length < 3)
      return lists;

    Arrays.sort(nums);
    int length = nums.length;

    for (int i = 0; i < length - 2; i++) {

      // 重复起点 去除
      if (i > 0 && nums[i] == nums[i - 1])
        continue;

      int left = i + 1;
      int right = length - 1;
      while (left < right) {
        int tmpSum = nums[i] + nums[left] + nums[right];

        if (tmpSum == 0) {

          Integer[] arr = new Integer[] { nums[i], nums[left], nums[right] };
          lists.add(Arrays.asList(arr));

          // 因为已经排序 了所以这里应该要跳过重复的
          while (left < right && nums[left] == nums[left + 1])
            left++;
          while (left < right && nums[right] == nums[right - 1])
            right--;

          left++;
          right--;
        } else if (tmpSum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }
    return lists;
  }
}