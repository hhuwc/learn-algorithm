/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {

  // https://leetcode-cn.com/problems/add-two-numbers/description/
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

    ListNode results = null;
    ListNode resultsCur = null;
    int jinwei = 0;
    int temp = 0;
    boolean first = true;
    ListNode curL1 = l1;
    ListNode curL2 = l2;

    int val;

    while (true) {
      // 如果都遍历完成了 跳出
      if (curL1 == null && curL2 == null) {
        if (jinwei != 0)
          resultsCur.next = new ListNode(jinwei);
        break;
      }

      temp = (curL1 == null ? 0 : curL1.val) + (curL2 == null ? 0 : curL2.val) + jinwei;
      if (temp >= 10) {
        val = temp - 10;
        jinwei = 1;
      } else {
        val = temp;
        jinwei = 0;
      }

      if (first) {
        resultsCur = results = new ListNode(val);
        first = false;
      } else {
        resultsCur = resultsCur.next = new ListNode(val);
      }

      curL1 = curL1 == null ? null : curL1.next;
      curL2 = curL2 == null ? null : curL2.next;

    }

    return results;
  }

}