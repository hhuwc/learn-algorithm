class Solution {
  public boolean isPalindrome(int x) {

    // 1. 首先负数 10 200 这种 但是 0 不是
    if (x < 0 || (x % 10 == 0 && x != 0))
      return false;
    int revertNumber = 0;
    while (x > revertNumber) {
      revertNumber = revertNumber * 10 + x % 10;
      x /= 10;
    }

    return x == revertNumber || x == revertNumber / 10;
  }
}