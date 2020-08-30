"use strict";

Function.prototype.myCall = function (...args) {
    // 第一个参数为 nil 时， this 指向为 globalThis, 但这个与严格模式运行结果不同
    const context = args[0] == undefined ? globalThis : args[0];
    // 随机串
    const uniqueID = Math.random().toString(36);
    // js中引用类型都是Object 子类，基本数据类型都有包装类，包装类也是Object 子类，
    // 2222["toString"]() (222).toString() 这种形式访问包装类toString方法 
    Object.prototype[uniqueID] = this;
    // 利用函数中的 this 指向调用它的对象，所以能够模拟 context 来调用那个函数即可
    const result = context[uniqueID](...args.slice(1));

    delete Object.prototype[uniqueID];
    return result;
}

function show(a, b) {
    console.log(this, a, b)
}

const obj = { test: 12 };

show.call(obj, 1, 2);
show.myCall(obj, 1, 2);

show.call(undefined, 1, 2);
show.myCall(undefined, 1, 2);

show.call(222, 1, 2);
show.myCall(222, 1, 2);

show.call(0, 1, 2);
show.myCall(0, 1, 2);

show.call(null, 1, 2);
show.myCall(null, 1, 2);

show.call(true, 1, 2);
show.myCall(true, 1, 2);

show.call([], 1, 2);
show.myCall([], 1, 2);

show.call("string", 1, 2);
show.myCall("string", 1, 2);

show.call();
show.myCall();
