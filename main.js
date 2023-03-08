// import { bubbleSort } from "./sort/bubble-sort.js";
// import { insertionSort } from './sort/insertion-sort.js';
// import { mergeSort } from './sort/merge-sort.js';
// import { selectionSort } from './sort/selection-sort.js';
import { quickSort } from './sort/quick-sort.js';
import { lessThan } from './utils/compare.js';

function main() {
    const dataSource = generateDataSource(30);
    console.log('Sort before: ', dataSource);
    // bubbleSort(dataSource, (a, b) => a - b > 0);
    // selectionSort(dataSource, lessThan);
    // const result = insertionSort(dataSource, lessThan);
    // const result = mergeSort(dataSource, lessThan);
    const result = quickSort(dataSource, lessThan);
    console.log('Sort after: ', result);
}

function generateDataSource(length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result[i] = Math.random() * length >>> 0;
    }
    return result;
}

main();