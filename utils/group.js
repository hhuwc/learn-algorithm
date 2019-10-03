const arr = [
    {
        code: 'CNY',
        money: 10,
        type: 1
    },
    {
        code: 'CNY',
        money: 13,
        type: 2
    },
    {
        code: 'USD',
        money: 10,
        type: 1
    },
    {
        code: 'USD',
        money: 22,
        type: 2
    },
    {
        code: 'HKD',
        money: 10,
        type: 1
    },
    {
        code: 'CNY',
        money: 10,
        type: 2
    },
    {
        code: null,
        money: 10,
        type: 2
    },
    {
        code: undefined,
        money: 10,
        type: 2
    }
];

const _ = require('lodash');

/**
 * @typedef {string | string [] | function} handle 可以是 path string、path array、function
 * @param {*} array
 * @param {handle} filter 分组器 , 当筛选器运算结果相同时, 分为一个组
 * @param {handle} getter 字段访问器 , getter isNil 时取值当前正在迭代的对象
 * @returns {object} 得到 {group1:[]} 形式的数据
 */
const getKeyValueArrayByGroup = (array, filter, getter) =>
    _.reduce(
        array,
        (accumulator, currentValue) => {
            const key = _.isFunction(filter)
                ? filter(currentValue)
                : _.get(currentValue, filter);

            if (_.isNil(accumulator[key])) accumulator[key] = [];

            accumulator[key].push(
                _.isNil(getter)
                    ? currentValue
                    : _.isFunction(getter)
                    ? getter(currentValue)
                    : _.get(currentValue, getter)
            );
            return accumulator;
        },
        {}
    );

console.log(getKeyValueArrayByGroup());
console.log(getKeyValueArrayByGroup(null));
console.log(getKeyValueArrayByGroup(undefined));
console.log(getKeyValueArrayByGroup(arr));
console.log(getKeyValueArrayByGroup(arr, undefined));
console.log(getKeyValueArrayByGroup(arr, null));
console.log(getKeyValueArrayByGroup(arr, 0));
console.log(getKeyValueArrayByGroup(arr, []));
console.log(getKeyValueArrayByGroup(arr, 'code'));
console.log(getKeyValueArrayByGroup(arr, 'code.0'));
console.log(getKeyValueArrayByGroup(arr, ['code', '1']));
console.log(getKeyValueArrayByGroup(arr, ({ money }) => money > 10));

console.log(getKeyValueArrayByGroup(arr, 'code', 'money'));
console.log(getKeyValueArrayByGroup(arr, 'code', ['code', '1']));
console.log(getKeyValueArrayByGroup(arr, 'code', 'code.1'));
console.log(getKeyValueArrayByGroup(arr, 'code', ({ money }) => money));
