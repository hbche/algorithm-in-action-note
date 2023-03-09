function greaterThan(pre, next) {
    return pre > next;
}

/**
 * 快速排序
 * 
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
function insertionSort(dataSource, compareFn = greaterThan) {
    if (Array.isArray(dataSource)) {
        const { length } = dataSource;
        if (length > 1) {
            for (let i = 1; i < length; i++) {
                let j = i - 1;
                const current = dataSource[i];
                while (j > 0 && compareFn(dataSource[j], dataSource[j + 1])) {
                    const temp = dataSource[j];
                    dataSource[j] = dataSource[j + 1];
                    dataSource[j + 1] = temp;
                    j--;
                }
                dataSource[j] = current;
            }
            return dataSource;
        } else {
            return dataSource;
        }
    } else {
        return [dataSource];
    }
}

/**
 * 桶排序
 * @param {*} dataSource 
 * @param {*} compareFn 
 * @returns 
 */
function bucketSort(dataSource, bucketSize) {
    if (Array.isArray(dataSource)) {
        const { length } = dataSource;
        if (length > 1) {
            let minValue = dataSource[0];
            let maxValue = dataSource[0];

            for (let i = 1; i < length; i++) {
                if (dataSource[i] < minValue) {
                    minValue = dataSource[i];
                } else if (dataSource[i] > maxValue) {
                    maxValue = dataSource[i];
                }
            }

            // 默认桶大小
            const DEFAULT_BUCKET_SIZE = 5;
            bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
            const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
            const buckets = Array.from({ length: bucketCount });
            for (let i = 0; i < buckets.length; i++) {
                buckets[i] = [];
            }

            for (let i = 0; i < length; i++) {
                const bucketIndex = Math.floor((dataSource[i] - minValue) / bucketSize);
                buckets[bucketIndex].push(dataSource[i]);
            }

            const sortedList = [];
            for (let i = 0; i < bucketCount; i++) {
                insertionSort(buckets[i]);
                sortedList.push(...buckets[i]);
            }

            return sortedList;
        } else {
            return dataSource;
        }
    } else {
        return dataSource;
    }
}

function generateDataSource(total) {
    return Array.from({ length: total }).map(() =>
        Math.round(Math.random() * total)
    );
}

const dataSource = generateDataSource(30);
console.log('Sort before: ', dataSource);
const result = bucketSort(dataSource);
console.log('Sort after: ', result);