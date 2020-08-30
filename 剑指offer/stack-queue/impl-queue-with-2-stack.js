// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 在js中就是只能用数组push,pop api 实现 队列api
// 两个栈, 一个栈用来存储元素 另一个用来辅助
// push时全部都存储到 stack1 中去  pop时 先把stack1 内容都放到 stack2 
// 然后 stack2 一个一个 pop 到 stack1 中

let stack1 = [];
let stack2 = [];
function push(node) {
  // write code here
  stack1.push(node);
}
function pop() {
  // write code here
  while(stack1.length > 0){
      stack2.push(stack1.pop());
  }

  let res = stack2.pop();
  while(stack2.length > 0){
    stack1.push(stack2.pop());
  }
  return res;
}
