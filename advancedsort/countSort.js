let utils = require("../utils/randomArray");

function countSort(arr) {
  // 寻找最大值
  let [min, max] = arr;
  arr.forEach(i => {
    i > max ? max = i : undefined;
    i < min ? min = i : undefined;
  });

  // 构建新数组
  let _arr = new Array(max - min + 1);
  _arr.fill(0);

  // 扫描原数组，填充 C
  arr.forEach(element => {
    _arr[element - min]++;
  });

  // 反向填充原数组 c [index]  = 1 代表  min + index  出现了一次
  // 这里可以做优化 不要再消耗一个空间
  let newArr = []
  for (let index = 0; index < _arr.length; index++) {
    if (_arr[index]) {
      newArr.push(min + index);
      _arr[index]--;
      index--;
    }
  }
  return newArr;
}


let count = 1000000;
let arr = utils.randomNearlyOrderArray(count); //NearlyOrder
//console.log(arr);
let start = new Date().getTime();
let newArr = countSort(arr);
let end = new Date().getTime();

if (utils.isSorted(newArr)) {
  console.log("计数排序成功，时间" + (end - start));
}