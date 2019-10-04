import promisesAplusTests from 'promises-aplus-tests';

import MyPromise from './promise';

MyPromise.deferred = () => {
    let dfd = {};
    dfd.promise = new MyPromise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};

promisesAplusTests(MyPromise, function(err) {
    // All done; output is in the console. Or check `err` for number of failures.
});
