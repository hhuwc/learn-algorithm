/**
 * 2019 07 07 今晚无事 回忆下 归并排序写法
 * 分区  然后 合并
 */

const utils = require('../utils/randomArray');

// 合并相邻区间
const merge = (arr, l, mid, r) => {
    let i = l;
    let j = mid + 1;
    let tmp = [];
    while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) tmp.push(arr[i++]);
        else tmp.push(arr[j++]);
    }

    // 将两个区间 剩余的部分合并到数组中去
    while (i <= mid) tmp.push(arr[i++]);
    while (j <= r) tmp.push(arr[j++]);

    // 用 tmp 的内容替换 l r 区间
    // 不使用shift 操作是因为其 性能消耗很重
    let m = l;
    let n = 0;
    while (m <= r) {
        arr[m++] = tmp[n++];
    }

    tmp = null;
};

// 分区
const mergeSort = (arr, l, r) => {
    if (l >= r) return;
    const mid = Math.floor((l + r) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    // 如果相邻区间 前一个区间 最后一个值 比 后一个区间 第一个值
    // 大 那么说明这两个区间需要调整
    if (arr[mid] > arr[mid + 1]) merge(arr, l, mid, r);
};

let arr = utils.randomArray(10000000);
let start = new Date().getTime();
mergeSort(arr, 0, arr.length - 1);
let end = new Date().getTime();

if (utils.isSorted(arr)) {
    console.log(end - start);
}
