const array = [1, 2, 3, 4, 5, 6];

const res1 = array.filter(i => i % 2 === 0).map(i => i * i);

console.log("res1", res1);

const filter = callback => array =>
  Array.prototype.filter.call(array, callback);

const map = callback => array => Array.prototype.map.call(array, callback);

// 不够优雅
const res2 = map(i => i * i)(filter(i => i % 2 === 0)(array));

console.log("res2", res2);

// 更优雅的方式
// compose(a,b,c) => (..args) => c(b(a(...args)))
const compose = (...funcs) => {
  if (funcs.length === 0) return (...args) => args;

  if (funcs.length === 1) return funcs[0];

  // reduce 如果没有 initialValue 默认是数组第一个值
  return funcs.reduce((ac, cur) => (...args) => cur(ac(...args)));
};

const res3 = compose(
  filter(i => i % 2 === 0),
  map(i => i * i)
)(array);

console.log("res3", res3);
