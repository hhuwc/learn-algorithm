const curry = (func, length) => {
  let _args = [];

  // length 属性指明函数的形参个数。
  const _length = length || func.length;

  const cb = (...args) => {
    _args = _args.concat(args);

    if (_args.length == _length) return func(..._args);

    return cb;
  };

  //  直接调用 生成的函数 首先会 清空临时保存的参数，这样才能多次调用
  return (...args) => {
    _args = [];
    return cb(...args);
  };
};

const abc = (a, b, c) => {
  return [a, b, c];
};

let a = curry(abc);

console.log(`a(1)(2, 3)  ${a(1)(2, 3)}`);
console.log(`a()(4)(5, 6)  ${a()(4)(5, 6)}`);
console.log(`a(7)(8)(9)  ${a(7)(8)(9)}`);
console.log(`a(7)(8)()(9)  ${a(7)(8)()(9)}`);
console.log(`a(10)()(11)()(12)  ${a(10)()(11)()(12)}`);
