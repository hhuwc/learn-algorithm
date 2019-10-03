console.time('push');
let arr1 = [];

for (let i = 0; i < 10000000; i++) {
    arr1.push(i);
}
console.timeEnd('push');

console.time('index');
let arr2 = [];

for (let i = 0; i < 10000000; i++) {
    arr2[i] = i;
}
console.timeEnd('index');

console.time('shift');
for (let i = 0; i < 10000000; i++) {
    arr2.shift();
}
console.timeEnd('shift');

// shift() 操作很需要性能
