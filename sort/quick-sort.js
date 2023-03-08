import { greaterThan } from "../utils/compare.js";
import { isArray } from '../utils/isArray.js';
import { swap } from "../utils/swap.js";

/**
 * 快速排序 O(n * log(n))
 * 
 * 步骤：
 * 1. 从数组中选择一个只作为主元素(pivot)，一般为数组中间的那个值；
 * 2. 创建两个指针，左边一个指向数组的第一个值，右边一个指向数组最后一个值。
 * 3. 移动左指针，直到我们找到一个比主元素大的值；接着移动右指针，直到找到一个比主元素小的值，然后交换他们。
 * 4. 重复步骤3，直到左指针跨越到右指针的右侧；这个过程将使得比主元素小的值排在主元素前面，而比主元素大的值都排在主元素后面。至此一个划分操作就算完成。
 * 5. 接着继续重复上述步骤，直到数组完全排序。
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
export function quickSort(dataSource, compareFn = greaterThan) {
    if (isArray(dataSource)) {
        const { length } = dataSource;
        if (length > 1) {
            return quick(dataSource, 0, length - 1, compareFn);
        } else {
            // 只有一个元素没必要排序
            return dataSource;
        }

    } else {
        return [dataSource];
    }
}

function quick(dataSource, left, right, compareFn) {
    let index;
    if (dataSource.length > 1) {
        index = partition(dataSource, left, right, compareFn);

        if (left < index - 1) {
            quick(dataSource, left, index - 1, compareFn);
        }

        if (index < right) {
            quick(dataSource, index, right, compareFn);
        }
    }

    return dataSource;
}

function partition(dataSource, left, right, compareFn) {
    const pivot = dataSource[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i < j) {
        while (dataSource[i] < pivot) {
            i++;
        }

        while (dataSource[j] > pivot) {
            j--;
        }

        if (j <= j) {
            swap(dataSource, i, j);
            i++;
            j--;
        }
    }

    return i;
}