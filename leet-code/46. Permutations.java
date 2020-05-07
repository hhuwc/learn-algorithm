class Solution {
  private List<List<Integer>> results = null;
  // 用于标记排列中的元素是否已经使用过了
  private boolean[] used = null;

  public List<List<Integer>> permute(int[] nums) {

    results = new LinkedList<>();

    if (nums == null || nums.length == 0)
      return results;

    used = new boolean[nums.length];

    generatePermus(nums, new LinkedList<>());

    return results;
  }

  public void generatePermus(int[] nums, LinkedList<Integer> p) {

    // 如果现在元素已经存满了,就是构成了一个组合了
    if (p.size() == nums.length) {
      results.add((LinkedList<Integer>) p.clone());
      return;
    }

    for (int i = 0; i < nums.length; i++) {
      // 如果这一项 没有使用过
      if (!used[i]) {
        p.addLast(nums[i]);
        used[i] = true;

        generatePermus(nums, p);

        // 回溯上去
        p.removeLast();
        used[i] = false;
      }
    }

    return;

  }
}