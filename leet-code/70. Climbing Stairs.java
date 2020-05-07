class Solution {

  // https://leetcode-cn.com/problems/climbing-stairs/description/
  public int climbStairs(int length) {
    if (length == 1)
      return 1;
    if (length == 2)
      return 2;

    int[] arr = new int[length + 1];
    arr[1] = 1;
    arr[2] = 2;

    for (int i = 3; i <= length; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[length];
  }
}