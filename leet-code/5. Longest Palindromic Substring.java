class Solution {

  // https://leetcode-cn.com/problems/longest-palindromic-substring/description/
  // 5. 最长回文子串
  public String longestPalindrome(String s) {
    if (s == null || s.length() <= 1)
      return s;

    int start = 0;
    int end = 0;
    int max = 0;

    int length = s.length();
    boolean[][] results = new boolean[length][length];
    for (int x = length - 1; x >= 0; x--) {

      // y = x 轴线上 单个字符都是 回文子字符串啊
      results[x][x] = true;

      for (int y = x + 1; y < length; y++) {
        if (y == x + 1 && s.charAt(y) == s.charAt(x)) {
          results[x][y] = true;
        } else if (y > x + 1 && s.charAt(y) == s.charAt(x) && results[x + 1][y - 1]) {
          results[x][y] = true;
        }

        if (results[x][y] && y - x > max) {
          start = x;
          end = y;
          max = y - x;
        }
      }

    }
    return s.substring(start, end + 1);
  }
}