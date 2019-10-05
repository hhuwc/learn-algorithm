import _ from 'lodash';

let arr = [];
let length = 10000000;
for (let i = 0; i < length; i++) {
    arr.push(_.uniqueId());
}

const set = new Set(arr);

test('Set has', () => {
    for (let i = 0; i < length; i++) {
        set.has(arr[i]);
    }
});

test('Array includes', () => {
    for (let i = 0; i < length; i++) {
        arr.includes(arr[i]);
    }
});

test('Array indexOf', () => {
    for (let i = 0; i < length; i++) {
        arr.indexOf(arr[i]);
    }
});

arr = [];
test('Array push', () => {
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
});

test('Array [index]', () => {
    for (let i = 0; i < length; i++) {
        arr[i] = i;
    }
});

test('Array shift', () => {
    for (let i = 0; i < 10000; i++) {
        arr.shift();
    }
});

const str = 'afsdfasdfasdfq3wfvadgsef';
test('String slice', () => {
    for (let i = 0; i < length; i++) {
        str.slice(0, 3);
    }
});
