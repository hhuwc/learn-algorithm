class Solution {
  // https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
  public int lengthOfLongestSubstring(String s) {
    int maxLength = 0;
    Map<Character, Integer> map = new HashMap<>();
    char[] chars = s.toCharArray();

    for (int i = 0; i < chars.length; i++) {
      if (map.containsKey(chars[i])) {

        // 指针跳回到 重复的那个位置上去
        i = map.get(chars[i]);
        maxLength = Math.max(maxLength, map.size());
        map.clear();
        continue;

      }
      map.put(chars[i], i);
    }

    maxLength = Math.max(maxLength, map.size());
    return maxLength;
  }
}