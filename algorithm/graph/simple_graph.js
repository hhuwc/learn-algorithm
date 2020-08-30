/**
 * 1.邻接矩阵表示方法
 *  比较适合表示稠密的图
 * 2.邻接表方法
 *  稀疏图比较合适
 */
function denseGraph(n, directed) {

  //n 表示图的顶点数量
  this.n = n;
  //m 表示图的边的数量
  this.m = 0;
  //directed 表示图是有向还是无向的
  this.directed = directed;
  //g 则是邻接矩阵  g[a][b] 表示 a -> b有边的存在
  this.g = [];

  //n*n 的矩阵表示
  for (var i = 0; i < n; i++) {
    this.g.push(new Array(n));
  }



}
