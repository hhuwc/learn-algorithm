const colors = require('colors');
const arr = [];
const length = 1000000;
for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (length - 1)) + 1);
}

const testSpeed = (label, data, value) => {
    console.log('>>>>>>>>>>>'.green);

    let d1 = new Date();
    for (let i = 0; i < length; i++) {
        data[label](value);
    }
    let d2 = new Date();

    console.log(`${label}   耗时 ${(d2 - d1) / 1000}s`);

    console.log('<<<<<<<<<<<\n'.green);
};

testSpeed('has', new Set(arr), arr[999]);
testSpeed('includes', arr, arr[999]);
testSpeed('indexOf', arr, arr[999]);
