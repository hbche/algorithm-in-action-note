import { greaterThan } from "../utils/compare.js";
import { isArray } from "../utils/isArray.js";

export function insertionSort(dataSource, compareFn = greaterThan) {
    if (isArray(dataSource)) {
        const { length } = dataSource;
        let temp;
        for (let i = 1; i < length; i++) {
            temp = dataSource[i];

            let j = i;
            // j到了最左侧或者找到了第一个compareFn为false的界限元素
            while (j > 0 && compareFn(dataSource[j - 1], temp)) {
                dataSource[j] = dataSource[j - 1];
                j--;
            }

            dataSource[j] = temp;
        }
        return dataSource;
    } else {
        return [dataSource];
    }
}