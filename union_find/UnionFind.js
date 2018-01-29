function UnionFind(num) {
  this.id = [];
  this.count = num;
  for (let i = 0; i < num; i++) {
    this.id[i] = i;
  }
}

UnionFind.prototype.find = function(p) {
  return this.id[p];
};

UnionFind.prototype.isConnected = function(p, q) {
  return this.id[p] === this.id[q];
};
UnionFind.prototype.union = function(p, q) {
  var pid = this.find(p);
  var qid = this.find(q);
  if (pid == qid) {
    return;
  }

  for (let j = 0; j < this.id.length; j++) {
    if (this.id[j] == qid) {
      this.id[j] = pid;
    }
  }
};

module.exports = UnionFind;
