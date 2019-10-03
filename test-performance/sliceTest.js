

const str = 'fasdfasdf';
console.time('slice-test');

for(let i = 0;i<1000000;i++){
    let str1 = str.slice(0,3);
}

console.timeEnd('slice-test');