# 冒泡排序

冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。

## 算法步骤

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

3. 针对所有的元素重复以上的步骤，除了最后一个。

4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

## 动图演示

![冒泡排序动图演示](./images/bubbleSort.gif)

## JavaScript 实现

```js
/**
 * 大于
 */
function greaterThan(pre, next) {
  return pre - next > 0;
}

/**
 * 小于
 */
function lessThan(pre, next) {
  return pre - next < 0;
}

function bubbleSort(dataSource, compareFn = greaterThan) {
  if (Array.isArray(dataSource)) {
    const { length } = dataSource;
    // n 个数只需要进行 n-1 轮比较，因为最后一轮只剩一个元素，没必要比较
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (compareFn(dataSource[j], dataSource[j + 1])) {
          const temp = dataSource[j + 1];
          dataSource[j + 1] = dataSource[j];
          dataSource[j] = temp;
        }
      }
    }

    return dataSource;
  } else {
    return [dataSource];
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
bubbleSort(dataSource);
console.log('Sort after: ', dataSource);
```

输出：

```
Sort before:  [
  13,  7, 24,  3,  1, 15, 17,  6, 26,
  19, 12, 15, 20,  5, 21,  7,  8, 14,
  16, 10, 21, 11, 11,  6, 25, 25,  6,
  23, 16, 21
]
Sort after:  [
   1,  3,  5,  6,  6,  6,  7,  7,  8,
  10, 11, 11, 12, 13, 14, 15, 15, 16,
  16, 17, 19, 20, 21, 21, 21, 23, 24,
  25, 25, 26
]
```
