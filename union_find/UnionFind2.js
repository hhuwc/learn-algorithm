function UnionFind(num) {
  this.parent = [];
  this.size = [];
  this.count = num;
  for (let i = 0; i < num; i++) {
    this.parent[i] = i;
    this.size[i] = 1;
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
  if (this.size[proot] < this.size[qroot]) {
    this.parent[proot] = qroot;
    this.size[qroot] += this.size[proot];
  }else{
    this.parent[qroot] = proot;
    this.size[proot] += this.size[qroot];
  }
};

module.exports = UnionFind;
