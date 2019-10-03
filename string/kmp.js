// dp
const getMatchTable = str => {
    if (!str) return;
    const len = str.length;
    const res = [0];

    let maxLength = 0;

    for (let index = 1; index < len; index++) {
        while (maxLength > 0 && str.charAt(index) != str.charAt(maxLength))
            maxLength = res[maxLength - 1];

        if (str.charAt(index) == str.charAt(maxLength)) maxLength++;

        res[index] = maxLength;
    }

    return res;
};

// easy to understand
const getMatchTable1 = str => {
    if (!str) return;
    const len = str.length;
    const res = [0];

    let maxLength = 0;

    for (let index = 1; index < len; index++) {
        if (str.charAt(index) == str.charAt(maxLength)) {
            maxLength++;
        } else {
            let i = maxLength;
            while (i > 0) {
                let str1 = str.slice(0, i);
                let str2 = str.slice(index - i + 1, index + 1);
                if (str1 == str2) break;
                i--;
            }
            maxLength = i;
        }

        res[index] = maxLength;
    }

    return res;
};

const kmp = (str, sub_str) => {
    // https://www.zhihu.com/question/21923021
    if (!str || !sub_str) return -1;
    let matchTables = getMatchTable1(sub_str);
    let count = 0;
};

module.exports = { getMatchTable, getMatchTable1 };
