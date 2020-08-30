class Solution {

  // https://leetcode-cn.com/problems/integer-break/description/
  public int integerBreak(int n) {
    if (n < 2)
      throw new IllegalArgumentException("too small");

    int[] res = new int[n + 1];
    res[1] = 1;
    res[2] = 1;

    for (int i = 3; i <= n; i++) {

      for (int j = 1; j < i; j++) {
        res[i] = Math.max(Math.max(j * (i - j), j * res[i - j]), res[i]);
      }
    }

    return res[n];
  }
}