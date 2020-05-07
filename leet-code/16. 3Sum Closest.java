class Solution {
  public int threeSumClosest(int[] nums, int target) {
    if (nums.length < 3)
      return 0;

    int length = nums.length;

    int minSum = 0;
    int diff = Integer.MAX_VALUE;

    Arrays.sort(nums);

    for (int i = 0; i < length - 2; i++) {

      int left = i + 1;
      int right = length - 1;

      while (left < right) {
        int tmpSum = nums[i] + nums[left] + nums[right];
        int tmpDif = tmpSum - target;

        // 相等 就是这个值啊 直接返回
        if (tmpDif == 0)
          return tmpSum;

        if (Math.abs(tmpDif) < diff) {
          minSum = tmpSum;
          diff = Math.abs(tmpDif);
        }

        if (tmpDif > 0) {
          right--;
        } else if (tmpDif < 0) {
          left++;
        }

      }
    }

    return minSum;
  }
}