# 桶排序

桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：

1. 在额外空间充足的情况下，尽量增大桶的数量
2. 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中

## 步骤

## 动态示意图

元素分布在桶中:

![](./images/Bucket_sort_1.svg_.png)

然后,元素在每个桶中的排序:

![](./images/Bucket_sort_2.svg_.png)

## 代码实现

```js
function greaterThan(pre, next) {
  return pre > next;
}

/**
 * 插入排序
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
```

## 测试

```js
function generateDataSource(total) {
  return Array.from({ length: total }).map(() =>
    Math.round(Math.random() * total)
  );
}

const dataSource = generateDataSource(30);
console.log('Sort before: ', dataSource);
const result = bucketSort(dataSource);
console.log('Sort after: ', result);
```

输出:

```
Sort before:  [
  13, 22, 16, 21,  9, 4, 20, 14,  5,
  19, 25, 27,  5, 21, 1,  7, 30, 15,
  12, 30, 16,  4,  8, 1, 20, 25,  7,
  10, 21, 24
]
Sort after:  [
   1,  1,  4,  4,  5,  5,  7,  7,  8,
  10, 10, 12, 12, 15, 15, 16, 16, 19,
  20, 20, 21, 21, 24, 24, 25, 25, 25,
  30, 30, 30
]
```
