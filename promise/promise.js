import _ from 'lodash';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

// promise a+ 规范
// https://promisesaplus.com/

class MyPromise {
    // 初始状态 pending
    status = PENDING;
    value = undefined; // 成功的值
    reason = undefined; // 失败的原因

    onResolvedCallback = []; // resolve 回调函数集
    onRejectedCallback = []; // reject 回调函数集

    constructor(handle) {
        const resolve = value => {
            if (value instanceof MyPromise) {
                return value.then(resolve, reject);
            }

            if (this.status === PENDING) {
                this.value = value;
                this.status = FULFILLED;
                this.onResolvedCallback.forEach(cb => cb());
            }
        };

        const reject = error => {
            if (this.status === PENDING) {
                this.reason = error;
                this.status = REJECTED;
                this.onRejectedCallback.forEach(cb => cb());
            }
        };

        try {
            handle(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    /**
     * 必须返回一个新的promise 对象
     */
    then = (onFullFilled, onRejected) => {
        let promise2;
        onFullFilled = _.isFunction(onFullFilled)
            ? onFullFilled
            : value => value;
        onRejected = _.isFunction(onRejected)
            ? onRejected
            : error => {
                  throw error;
              };

        //  处理当前promise 实例 和 then 方法返回的 promise 实例的关系
        const resolvePromise = (promise2, x, resolve, reject) => {
            if (promise2 === x) {
                return reject(new TypeError('循环引用'));
            }

            let called = false;

            // 处理 thenable 对象 和 Promise 实例
            // _.isObject(null) = false
            if (_.isObject(x)) {
                try {
                    // 防止解构 thenbale 对象时出错
                    const { then } = x;
                    if (_.isFunction(then)) {
                        then.call(
                            x,
                            value => {
                                if (called) return;
                                called = true;
                                resolvePromise(
                                    promise2,
                                    value,
                                    resolve,
                                    reject
                                );
                            },
                            error => {
                                if (called) return;
                                called = true;
                                reject(error);
                            }
                        );
                    } else {
                        resolve(x);
                    }
                } catch (error) {
                    if (called) return;
                    called = true;
                    reject(error);
                }
            } else {
                resolve(x);
            }
        };

        // then 函数每次会返回一个新的promise 对象
        promise2 = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFullFilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }

            if (this.status === PENDING) {
                this.onResolvedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFullFilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
                this.onRejectedCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
            }
        });

        return promise2;
    };
}

export default MyPromise;
