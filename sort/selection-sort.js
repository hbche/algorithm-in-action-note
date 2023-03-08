import { isArray } from '../utils/isArray.js';
import { swap } from '../utils/swap.js';
import { greaterThan } from '../utils/compare.js';

/**
 * 选择排序：
 * 第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
 * 然后再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾。
 * 以此类推，直到全部待排序的数据元素的个数为零。选择排序是不稳定的排序方法。
 * 
 * 注意点：由于比较的是外循环和内循环的当前数据项，所有内循环最后一个元素的索引应该是 length - 1
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
export function selectionSort(dataSource, compareFn = greaterThan) {
    if (isArray(dataSource)) {
        const { length } = dataSource;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (compareFn(dataSource[j], dataSource[i])) {
                    swap(dataSource, j, i);
                }
            }
        }
        return dataSource;
    } else {
        return [dataSource];
    }
}