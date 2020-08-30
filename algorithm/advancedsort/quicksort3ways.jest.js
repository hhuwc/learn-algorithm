
import { quicksort } from "./quicksort3ways";
const utils = require("../utils/randomArray");



let count = 10000000;
let arr = utils.randomNearlyOrderArray(count);//NearlyOrder

let arr1 = utils.randomArray(count);//NearlyOrder

test('三路快排 方差较小的数组', () => {
    quicksort(arr, 0, count - 1);

    expect(utils.isSorted(arr)).toBeTruthy();
});


test('三路快排 方差较大的数组', () => {
    quicksort(arr1, 0, count - 1);

    expect(utils.isSorted(arr1)).toBeTruthy();
});