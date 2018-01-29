function UnionFind(num) {
  this.parent = [];
  this.count = num;
  for (let i = 0; i < num; i++) {
    this.parent[i] = i;
  }
}

UnionFind.prototype.find = function(p) {
  while (p != this.parent[p]) {
    p = this.parent[p];
  }
  return p;
};

UnionFind.prototype.isConnected = function(p, q) {
  return this.find(p) === this.find(q);
};
UnionFind.prototype.union = function(p, q) {
  var proot = this.find(p);
  var qroot = this.find(q);
  if (proot == qroot) {
    return;
  }

  this.parent[proot] = qroot;
};

module.exports = UnionFind;
