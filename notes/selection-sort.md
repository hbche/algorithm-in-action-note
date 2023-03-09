# 选择排序

## 算法步骤

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。

2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

3. 重复第二步，直到所有元素均排序完毕。

## 动图演示

![选择排序](./images/selectionSort.gif)

## 代码实现

```js
function lessThan(pre, next) {
  return pre - next < 0;
}

function greaterThan(pre, next) {
  return pre - next > 0;
}

function selectionSort(dataSource, compareFn = greaterThan) {
  if (Array.isArray()) {
    const { length } = dataSource;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (compareFn(dataSource[i], dataSource[j])) {
          const temp = dataSource[i];
          dataSource[i] = dataSource[j];
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
selectionSort(dataSource);
console.log('Sort after: ', dataSource);
```

输出：

```
Sort before:  [
   8, 24, 11, 28, 30, 13, 10, 18, 24,
  19, 11, 26,  4, 23,  2, 19, 12, 23,
  27, 26,  8, 30, 14, 17, 27, 12, 20,
  25, 17,  6
]
Sort after:  [
   2,  4,  6,  8,  8, 10, 11, 11, 12,
  12, 13, 14, 17, 17, 18, 19, 19, 20,
  23, 23, 24, 24, 25, 26, 26, 27, 27,
  28, 30, 30
]
```
