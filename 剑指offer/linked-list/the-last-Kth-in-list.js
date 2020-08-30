// 输入一个链表，输出该链表中倒数第k个结点。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 思路1 ，遍历链表放到一个栈中去， 然后弹栈
// 思路2  快慢指针 一个指针先走k 然后两个一起走 每次走一步 当k指针指向 null 时
// 慢指针 指向倒数第k个

//  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

function FindKthToTail(head, k) {
  if (head === null || k === 0) {
    return null;
  }
  // write code here
  let i = 0;
  let fast = head;
  while (i < k) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
    i++;
  }

  let slow = head;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
