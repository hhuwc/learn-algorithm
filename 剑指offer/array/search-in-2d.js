// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

const array = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

// 返回 Boolean
// 最笨的方法 一行一行的遍历 ，最坏时间复杂度  O(m * n)
//
const Find = (target, array) => {
  const x_len = array[0].length;
  const y_len = array.length;
  let x = x_len - 1; // 对应x_len 方向
  let y = 0; // 对应y_len 方向
  let flag = false;
  while (x >= 0 && y < y_len) {
    const value = array[y][x];
    if (value > target) {
      x--;
    } else if (value < target) {
      y++;
    } else {
      return true;
    }
  }

  return flag;
};

console.log(searchValueIn2DArray(array, 9));
