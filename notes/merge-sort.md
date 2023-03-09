# 归并排序

## 算法步骤

## 动图演示

![归并排序](./images/mergeSort.gif)

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

/**
 * 归并排序
 */
function mergeSort(dataSource, compareFn = greaterThan) {
  if (Array.isArray(dataSource)) {
    const { length } = dataSource;
    if (length > 1) {
      const middle = Math.floor(length / 2);
      const left = mergeSort(dataSource.slice(0, middle), compareFn);
      const right = mergeSort(dataSource.slice(middle), compareFn);
      return merge(left, right, compareFn);
    }

    return dataSource;
  } else {
    return [dataSource];
  }
}

/**
 * 合并工具函数
 */
function merge(left, right, compareFn) {
  // 左侧数组的游标
  let i = 0;
  // 右侧数组的游标
  let j = 0;
  //   合并后的数组
  let result = [];
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) ? left[i++] : right[j++]);
  }

  // 因为每个小块的长度最多相差一个数组，所以剩余数据不必比较，直接追加即可
  result = result.concat(i < left.length ? left.slice(i) : right.slice(j));
  return result;
}
```

## 测试

```js
function generateDataSource(total) {
  return Array.from({ length: total }).map(() =>
    Math.round(Math.random() * total)
  );
}

const dataSource = generateDataSource(10);
console.log('Sort before: ', dataSource);
const result = mergeSort(dataSource);
console.log('Sort after: ', result);
```

输出：

```
Sort before:  [
  0, 3, 9,  3, 0,
  6, 6, 1, 10, 3
]
Sort after:  [
  10, 9, 6, 6, 3,
   3, 3, 1, 0, 0
]
```
