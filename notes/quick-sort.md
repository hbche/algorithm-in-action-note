# 快速排序

快速排序使用分治法（Divide and conquer）策略来把一个串行（list）分为两个子串行（sub-lists）。

本质上来看，快速排序应该算是在冒泡排序基础上的递归分治法。

> 快速排序的最坏运行情况是 O(n²)，比如说顺序数列的快排。但它的平摊期望时间是 O(nlogn)，且 O(nlogn) 记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn) 的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数列而言，快速排序总是优于归并排序。

## 步骤

1. 首先，从数组中选择一个值作为主元（pivot），也就是数组中间的那个值。
2. 创建两个指针（引用），左边一个指向数组第一个值，右边一个指向数组最后一个值。移动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分（partition）操作。
3. 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。

## 动图演示

![快速排序](./images/quickSort.gif)

## 代码

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

function quickSort(dataSource, compareFn = lessThan) {
  if (Array.isArray(dataSource)) {
    if (dataSource.length > 1) {
      return quick(dataSource, 0, dataSource.length - 1, compareFn);
    } else {
      return dataSource;
    }
  } else {
    return [dataSource];
  }
}

/**
 * 快速排序
 * @param {*} dataSource
 * @param {*} left
 * @param {*} right
 * @param {*} compareFn
 * @returns
 */
function quick(dataSource, left, right, compareFn) {
  let index;
  if (dataSource.length > 1) {
    index = partition(dataSource, left, right, compareFn);
    if (left < index - 1) {
      // 左侧子划分递归调用快速排序,完成右侧子划分内部的排序
      quick(dataSource, left, index - 1, compareFn);
    }

    if (index < right) {
      // 右侧子划分递归调用快速排序,完成右侧子划分内部的排序
      quick(dataSource, index, right, compareFn);
    }
  }
  return dataSource;
}

/**
 * 划分函数
 * @param {*} dataSource
 * @param {*} left
 * @param {*} right
 * @param {*} compareFn
 * @returns
 */
function partition(dataSource, left, right, compareFn) {
  let i = left;
  let j = right;
  const pivot = dataSource[Math.floor((left + right) / 2)];

  while (i <= j) {
    // 找到比 pivot 大的数据对应的索引,如果比 pivot 小就继续向右移动指针
    while (compareFn(dataSource[i], pivot)) {
      i++;
    }

    // 找到比 pivot 小的数据对应的索引,如果比 pivot 大就继续向左移动指针
    while (compareFn(pivot, dataSource[j])) {
      j--;
    }

    // 如果 i|j 分布在 pivot 两侧,就交换他们,同时注意 i|j 需要移动
    if (i <= j) {
      const temp = dataSource[i];
      dataSource[i] = dataSource[j];
      dataSource[j] = temp;
      i++;
      j--;
    }
  }

  // 完成一轮划分,在 i 左侧的数据都比 i 对应的数据小,在 i 右侧的数据都比 i 对应的数据大,此时的 i 不一定是整个列表中间的索引,它将作为下一轮快排的 left 的有边界 或者 right 的左边界
  return i;
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
const result = quickSort(dataSource);
console.log('Sort after: ', result);
```

输出:

```
Sort before:  [
  10, 30, 30, 21, 23,  2,  8, 23,  8,
   2, 24, 14, 21, 30, 21,  3,  2, 15,
   1, 28, 10, 11,  1,  7, 23, 10, 22,
   6, 13, 17
]
Sort after:  [
   1,  1,  2,  2,  2,  3,  6,  7,  8,
   8, 10, 10, 10, 11, 13, 14, 15, 17,
  21, 21, 21, 22, 23, 23, 23, 24, 28,
  30, 30, 30
]
```
