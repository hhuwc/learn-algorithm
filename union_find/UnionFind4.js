function UnionFind(num) {
  this.parent = [];
  this.rank = [];
  this.count = num;
  for (let i = 0; i < num; i++) {
    this.parent[i] = i;
    this.rank[i] = 1;
  }
}

UnionFind.prototype.find = function(p) {
  while (p != this.parent[p]) {
    p = this.parent[this.parent[p]];
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
  if (this.rank[proot] < this.rank[qroot]) {
    this.parent[proot] = qroot;
  } else if (this.rank[proot] > this.rank[qroot]) {
    this.parent[qroot] = proot;
  } else {
    this.parent[proot] = qroot;
    this.rank[qroot] += 1;
  }
};

module.exports = UnionFind;
