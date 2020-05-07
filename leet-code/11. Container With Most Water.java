class Solution {
  // https://leetcode-cn.com/problems/container-with-most-water/description/
  public int maxArea(int[] height) {
    int areaMax = 0; // 其实最小的 面积是 2
    for (int i = 0, j = height.length - 1; j > i;) {

      // 当前两根指针所指的面积
      int curArea = (height[i] > height[j] ? height[j] : height[i]) * (j - i);

      areaMax = curArea > areaMax ? curArea : areaMax;

      // 接下来 是重点指针往哪里跳的问题
      // 是跳左指针 还是跳 右指针
      // 这两种情况 有较大概率会产生较大值 
      if (height[i + 1] > height[i] && height[j] > height[i]) {
        i++;
        continue;
      }

      if (height[j - 1] > height[j] && height[i] > height[j]) {
        j--;
        continue;
      }

      if (height[i] > height[j]) {
        j--;
      } else {
        i++;
      }
    }

    return areaMax;
  }
}