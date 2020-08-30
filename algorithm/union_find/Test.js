var UnionFind = require("./UnionFind4");

var n = 10000000;
var uf1 = new UnionFind(n);

//Math.floor(Math.random() * (b - a) + a);

let start = new Date().getTime();
for (let i = 0; i < n; i++) {
  var a = Math.floor(Math.random() * n);
  var b = Math.floor(Math.random() * n);
  uf1.union(a, b);
}
for (let i = 0; i < n; i++) {
  var c = Math.floor(Math.random() * n);
  var d = Math.floor(Math.random() * n);
  uf1.isConnected(c, d);
}
let end = new Date().getTime();
console.log("并查集" + (end - start));
