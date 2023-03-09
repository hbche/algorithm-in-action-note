# 插入排序

## 步骤

将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）

## 动图演示

![插入排序](./images/insertionSort.gif)

## 代码实现

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

function insertionSort(dataSource, compareFn = greaterThan) {
  if (Array.isArray(dataSource)) {
    const { length } = dataSource;

    for (let i = 1; i < length; i++) {
      const current = dataSource[i];
      let j = i - 1;

      while (j >= 0 && compareFn(dataSource[j], current)) {
        dataSource[j + 1] = dataSource[j];
        j--;
      }

      dataSource[j + 1] = current;
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
insertionSort(dataSource);
console.log('Sort after: ', dataSource);
```

输出：

```
Sort before:  [
   5, 27, 13, 25, 22, 28, 10,  7, 30,
  12,  8,  5, 20, 11, 11, 13, 29,  2,
  21,  7, 24, 21, 30, 16, 22,  5, 24,
   0, 23,  8
]
Sort after:  [
   0,  2,  5,  5,  5,  7,  7,  8,  8,
  10, 11, 11, 12, 13, 13, 16, 20, 21,
  21, 22, 22, 23, 24, 24, 25, 27, 28,
  29, 30, 30
]
```
