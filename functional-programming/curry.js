const curry = func => {
    let _args = [];

    // length 属性指明函数的形参个数。
    const length = func.length;

    const cb = (...args) => {
        _args = _args.concat(args);

        if (_args.length == length) return func(..._args);

        return cb;
    };

    //  直接调用 生成的函数 首先会 清空临时保存的参数，这样才能多次调用
    const wrap = (...args) => {
        _args = [];

        return cb(...args);
    };

    return wrap;
};

const abc = (a, b, c) => {
    return [a, b, c];
};

let a = curry(abc);

console.log(a(1)(2, 3));
console.log(a(4, 5, 6));

let a1 = a(1);
let a2 = a1(3);
let a3 = a2(5);

console.log(a1);
console.log(a2);
console.log(a3);
