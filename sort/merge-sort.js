import { greaterThan } from "../utils/compare.js";
import { isArray } from '../utils/isArray.js';

/**
 * 归并排序
 * 归并排序是一种分而治之的算法。其思想就是将原始数组切分成较小的数组，知道每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
 * 1. 归并排序就是将一个大数组转化为多个小数组，直到其中只有一项。
 * 2. 如果数组长度大于1，那就继续切割；
 * 3. 找到数组的中间位，将数组分为左右两个小分组；
 * 4. 将数组分隔成一个个只有单个元素的数组之后，再开始合并小分组，进行小分组排序，并将其合并；
 * 5. 直到所有的分组全部合并完毕
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
export function mergeSort(dataSource, compareFn = greaterThan) {
    if (isArray(dataSource)) {
        if (dataSource.length > 1) {
            const { length } = dataSource;
            const middle = Math.floor(length / 2);
            const left = mergeSort(dataSource.slice(0, middle), compareFn);
            const right = mergeSort(dataSource.slice(middle, length), compareFn);

            dataSource = merge(left, right, compareFn);
        }

        return dataSource;
    } else {
        return [dataSource];
    }
}

function merge(left, right, compareFn) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
        result.push(compareFn(left[i], right[j]) ? left[i++] : right[j++]);
    }

    // 如果 i < left.length，表明right数组先行遍历完毕，left数组还有未遍历完的数据，需要追加到返回数组的结尾
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}