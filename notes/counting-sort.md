# 计数排序

利用数组的索引为整数的特性来存储整数值的排序方法,以内存换取速度.

## 步骤

1. 找出待排序的数组中最大和最小的元素
2. 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项
3. 对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）
4. 反向填充目标数组：将每个元素 i 放在新数组的第 C(i)项，每放一个元素就将 C(i)减去 1

## 动图演示

![计数排序](./images/countingSort.gif)

## 代码实现

```js
function countingSort(dataSource) {
  if (Array.isArray(dataSource)) {
    if (dataSource.length > 1) {
      // 找出最大值
      const maxValue = findMaxValue(dataSource);
      const counts = Array.from({ length: maxValue + 1 });

      // 遍历原始数据
      dataSource.forEach((item) => {
        if (!counts[item]) {
          counts[item] = 0;
        }

        // 统计 数值 出现的次数,以当前数值作为索引,值为该数值出现的次数
        counts[item] += 1;
      });

      const result = [];
      counts.forEach((count, index) => {
        while (count > 0) {
          result.push(index);
          count--;
        }
      });

      return result;
    } else {
      return dataSource;
    }
  } else {
    return [dataSource];
  }
}

function findMaxValue(dataSource) {
  let maxValue = dataSource[0];
  for (let i = 1; i < dataSource.length; i++) {
    if (dataSource[i] > maxValue) {
      maxValue = dataSource[i];
    }
  }
  return maxValue;
}
```

## 测试

输出:

```
Sort before:  [
  20, 15, 13, 10, 15, 22, 20, 12, 24,
  28,  5, 16, 21, 12,  7, 20, 10, 25,
  24, 12,  7, 23, 10, 15, 19,  6, 10,
   2, 11, 18
]
Sort after:  [
   2,  5,  6,  7,  7, 10, 10, 10, 10,
  11, 12, 12, 12, 13, 15, 15, 15, 16,
  18, 19, 20, 20, 20, 21, 22, 23, 24,
  24, 25, 28
]
```
