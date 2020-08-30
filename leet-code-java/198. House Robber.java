class Solution {
  // https://leetcode-cn.com/problems/house-robber/description/

  // 这个解法是 自顶向下的过程
  public int rob(int[] p) {
    int[] memo = new int[p.length];
    Arrays.fill(memo, -1);
    return tryRob(p, 0, memo);
  }

  private int tryRob(int[] p, int index, int[] memo) {
    if (index >= p.length)
      return 0;
    if (memo[index] != -1)
      return memo[index];
    int res = 0;
    for (int i = index; i < p.length; i++) {
      res = Math.max(p[i] + tryRob(p, i + 2, memo), res);
    }

    return memo[index] = res;
  }

  // 自底向上的过程
  public int rob1(int[] p) {
    int length = p.length;
    if (length == 0)
      return 0;

    int[] nums = new int[length];

    // 最后一个就是从 n-1 开始偷 就只能投这一个了
    nums[length - 1] = p[length - 1];

    for (int i = length - 2; i >= 0; i--)
      for (int j = i; j < length; j++)
        nums[i] = Math.max(nums[i], p[j] + ((j >= length - 2) ? 0 : nums[j + 2]));

    return nums[0];
  }
}