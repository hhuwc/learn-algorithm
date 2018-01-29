let utils = require("../utils/randomArray");

Array.prototype.swap = function(n1, n2) {
  this[n1] = this[n1] + this[n2];
  this[n2] = this[n1] - this[n2];
  this[n1] = this[n1] - this[n2];
};
Array.prototype.heapSort = function() {
  var n = this.length - 1;
  // 最后一个非叶子节点 (n -1) >>1
  for (var i = (n - 1) >> 1; i >= 0; i--) {
    this.shiftDown(i, n);
  }
  for (var j = n; j > 0; j--) {
    this.swap(j, 0);
    this.shiftDown(0, j-1);
  }
};
Array.prototype.shiftDown = function(index, end) {
  while (2 * index + 1 <= end) {
    var j = 2 * index + 1;
    //判断 是否有 左右子树 ,并找出 其中 最大的 一颗 子树
    if (j + 1 <= end && this[j + 1] > this[j]) {
      j++;
    }

    if (this[index] >= this[j]) {
      break;
    }

    this.swap(index, j);
    index = j;
  }
};
let start = new Date().getTime();
var count = 1000000;
var arr = utils.randomArray(count); //NearlyOrder
arr.heapSort();
let end = new Date().getTime();
if (utils.isSorted(arr)) {
  console.log("堆排序时间" + (end - start));
}

