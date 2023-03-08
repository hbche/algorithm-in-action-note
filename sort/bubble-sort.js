import { isArray } from '../utils/isArray.js';
import { swap } from '../utils/swap.js';

/**
 * 冒泡排序
 * 1. 依次比较相邻两个元素之间的大小，根据compareFn函数决定是否需要进行位置交换，直到比较元素来到了列表结尾，一轮比较才算结束;
 * 2. n个元素需要进行n轮比较;每完成一轮1步骤的比较，就完成了数据的冒泡，位于列表尾部的数据就完成了排序；比如按照升序排序，第一轮比较完成后，最后一个元素就是最大的元素，下次只需要比较[0, length - 2]范围内的数据
 * 
 * 注意点：因为每次比较都是相邻两个数据的比较，都位于内循环内部，所以n轮内循环最后一次比较时，pre的索引应该是 length - n - 2
 * 
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
export function bubbleSort(dataSource, compareFn = defaultCompare) {
    if (isArray(dataSource)) {
        const { length } = dataSource;
        // n 个元素只需要 n - 1 轮排序
        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (compareFn(dataSource[j], dataSource[j + 1])) {
                    swap(dataSource, j, j + 1);
                }
            }
        }
        return dataSource;
    } else {
        return [dataSource];
    }
}