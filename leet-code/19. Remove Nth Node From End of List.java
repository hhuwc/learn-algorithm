/**
 * Definition for singly-linked list.
 */
public class ListNode {
  int val;
  ListNode next;

  ListNode(int x) {
    val = x;
  }
}

class Solution {

  // 解法1 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
  // 记住 倒数第 n- 1 个节点 ,还有倒数第 n+1 的节点 就可以删除
  // 倒数第 n 个 就是 正数 length + 1 - n

  // 解法2 是使用 快慢指针 开始都指向null 一个指针先跑 n 步 之后快慢指针
  // 每次只移动一步 当快指针 next 指针指向 null时 慢指针指向 目标元素的前一个
  // 注意点在于 slow 指针可能没有移动 还是指向null 说明其要删除的是 就是头结点
  //  那么直接返回头结点下一个元素作为新的头结点就行了

  public ListNode removeNthFromEnd(ListNode head, int n) {
    if (head == null || (head.next == null && n == 1))
      return null;

    ListNode fast = null;
    ListNode slow = null;

    int i = 0;
    while (i < n) {
      fast = fast == null ? head : fast.next;
      i++;
    }

    while (fast != null && fast.next != null) {
      fast = fast.next;
      slow = slow == null ? head : slow.next;
    }

    if (slow == null) {
      return head.next;
    }
    slow.next = slow.next.next;
    return head;
  }
}