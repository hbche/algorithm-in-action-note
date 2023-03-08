# 冒泡排序

冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。

## 算法步骤

1. 按照某种规则比较相邻两个元素，如果比较函数返回 true，交换相邻两个元素，直到相邻元素到达列表结尾，此时一轮比较完成，比较规则最顶层的元素也完成排序，即列表的最后一个元素，不需要参加下一轮的比较【】；

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
Sort before:  (30) [0, 24, 18, 25, 28, 11, 9, 6, 17, 18, 19, 3, 7, 6, 7, 28, 2, 9, 12, 20, 19, 16, 28, 8, 27, 26, 9, 2, 3, 29]
VM6326:34 Sort after:  (30) [0, 2, 2, 3, 3, 6, 6, 7, 7, 8, 9, 9, 9, 11, 12, 16, 17, 18, 18, 19, 19, 20, 24, 25, 26, 27, 28, 28, 28, 29]
```
