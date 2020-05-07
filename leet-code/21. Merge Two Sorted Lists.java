/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    if (l1 == null && l2 == null)
      return null;
    if (l1 == null)
      return l2;
    if (l2 == null)
      return l1;

    // 解法1 暴力一点 直接取出链表所有元素 ,然后合并排序 , 然后构造新的链表

    // 解法2 提取两个链表的头 构造新的链表出来 假设不对输入的值进行改变

    ListNode cur1 = l1;
    ListNode cur2 = l2;

    ListNode newHead = null;
    if (cur1.val > cur2.val) {
      newHead = new ListNode(cur2.val);
      cur2 = cur2.next;
    } else {
      newHead = new ListNode(cur1.val);
      cur1 = cur1.next;
    }
    ListNode curNew = newHead;

    while (cur1 != null || cur2 != null) {
      if (cur1 != null && cur2 != null) {
        if (cur1.val > cur2.val) {
          curNew = curNew.next = new ListNode(cur2.val);
          cur2 = cur2.next;
        } else {
          curNew = curNew.next = new ListNode(cur1.val);
          cur1 = cur1.next;
        }
      } else if (cur1 == null && cur2 != null) {
        curNew = curNew.next = new ListNode(cur2.val);
        cur2 = cur2.next;

      } else if (cur2 == null && cur1 != null) {
        curNew = curNew.next = new ListNode(cur1.val);
        cur1 = cur1.next;
      }
    }

    return newHead;
  }
}