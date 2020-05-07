import java.util.HashMap;
import java.util.Map;

class Solution {

  // https://leetcode.com/problems/two-sum/description/
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {

      int chazhi = target - nums[i];
      if (map.containsKey(chazhi)) {
        return new int[] { map.get(chazhi), i };
      }

      // 如果已经存在这个键值了 ,说明有重复啊 !
      if (map.containsKey(nums[i]) && nums[i] * 2 == target) {
        return new int[] { map.get(nums[i]), i };
      } else {
        map.put(nums[i], i);
      }

    }

    return null;
  }
}