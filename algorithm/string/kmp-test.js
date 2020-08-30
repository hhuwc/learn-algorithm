const _ = require('lodash');
const colors = require('colors');
const { getMatchTable, getMatchTable1 } = require('./kmp');

let str1 = '';
for (let i = 0; i < 20000000; i++) {
    str1 += String.fromCharCode(Math.round(Math.random() * (90 - 65)) + 65);
}

const getStatus = flag => {
    return flag ? colors.green('成功') : colors.red('失败');
};

const testGetMatchTable = (label, in1, out) => {
    console.log('>>>>>>>>>>>'.green);

    let d1 = new Date();
    const res1 = getMatchTable(in1);
    let d2 = new Date();
    const flag1 = _.isEqual(res1, out);
    console.log(
        `${label} getMatchTable ${getStatus(flag1)} 耗时 ${(d2 - d1) / 10000}ms`
    );

    let d3 = new Date();
    let res2 = getMatchTable1(in1);
    let d4 = new Date();
    let flag2 = _.isEqual(res2, out);
    console.log(
        `${label} getMatchTable1 ${getStatus(flag2)} 耗时 ${(d4 - d3) / 1000}ms`
    );

    console.log('<<<<<<<<<<<\n'.green);
};

const test1 = 'AAAABBBA';
const result1 = [0, 1, 2, 3, 0, 0, 0, 1];
testGetMatchTable('test1', test1, result1);

const test2 = 'BDCDABD';
const result2 = [0, 0, 0, 0, 0, 1, 2];
testGetMatchTable('test2', test2, result2);

const test3 = 'ABCDABD';
const result3 = [0, 0, 0, 0, 1, 2, 0];
testGetMatchTable('test3', test3, result3);

const test4 = 'ABDDABD';
const result4 = [0, 0, 0, 0, 1, 2, 3];
testGetMatchTable('test4', test4, result4);

const res1 = getMatchTable(str1);
const res2 = getMatchTable1(str1);

testGetMatchTable('test5', str1, res1);
testGetMatchTable('test6', str1, res2);
