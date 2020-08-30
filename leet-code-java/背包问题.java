
public class 背包问题 {


  public static void main(String[] args) {

    int[] weight = new int[] { 1, 2, 3, 4 };

    int[] price = new int[] { 5, 6, 4, 5 };

    int capacity = 7;

    System.out.println(bag01(weight, price, capacity)); // 最优解 16

  }

  public static int bag01(int[] weight, int[] price, int capacity) {
    return bestBag(weight, price, price.length - 1, capacity);
  }

  private static int bestBag(int[] weight, int[] price, int index, int remainCapacity) {
    if (remainCapacity <= 0 || index < 0)
      return 0;

    int res = bestBag(weight, price, index - 1, remainCapacity);
    if (weight[index] <= remainCapacity) {

      res = Math.max(res, price[index] + bestBag(weight, price, index - 1, remainCapacity - weight[index]));
    }

    return res;
  }

  // 使用自顶向下的 方法改写
  // 备忘录的结构 可以观测上面的 递归方法 应该是由 index , remainCapacity 组成的二维数组
  public static int bag01_1(int[] weight, int[] price, int capacity) {
      int memo[][] = new int[weight.length][capacity];
      return bestBag_1(weight, price, weight.length - 1, capacity, memo);
  }

  private static int bestBag_1(int[] weight, int[] price, int index, int remainCapacity, int memo[][]) {
      if (remainCapacity <= 0 || index < 0) return 0;

      if (memo[index][remainCapacity - 1] > 0) return memo[index][remainCapacity - 1];

      int res = bestBag(weight, price, index - 1, remainCapacity);
      if (weight[index] <= remainCapacity) {

          res = Math.max(res, price[index] + bestBag(weight, price, index - 1, remainCapacity - weight[index]));
      }

      return memo[index][remainCapacity - 1] = res;
  }


  //使用 自下而上的方法
  public static int bag01_2(int[] weight, int[] price, int capacity) {
    if (weight.length != price.length) throw new IllegalArgumentException("different length");
    int res[][] = new int[weight.length][capacity + 1];

    // y轴 表示 可以偷取 [0-index] 闭区间索引的房子
    // x轴 表示 背包的容积

    /*
     *  id      0   1   2
     *  weight  1   2   3
     *  value   6   10  12
     * */

    /*      0   1   2   3   4   5
     *   0  0   6   6   6   6   6
     *   1  0   6   10  16  16  16
     *   2  0   6   10  16  18  22
     * */
    for (int j = 0; j <= capacity; j++) {
        res[0][j] = j >= weight[0] ? price[0] : 0;
    }
    for (int i = 0; i < weight.length; i++) {
        res[i][0] = 0;
    }

    for (int i = 1; i < weight.length; i++) {
        for (int j = 1; j <= capacity; j++) {
            res[i][j] = res[i - 1][j];
            if (j >= weight[i]) {
                res[i][j] = Math.max(res[i - 1][j], res[i - 1][j - weight[i]] + price[i]);
            }

        }
    }

    return res[weight.length - 1][capacity];
}

}