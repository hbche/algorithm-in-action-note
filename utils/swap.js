/**
 * 交换数据
 * @param {*} dataSource 
 * @param {*} preIndex 
 * @param {*} nextIndex 
 * @returns 
 */
export function swap(dataSource, preIndex, nextIndex) {
    const temp = dataSource[nextIndex];
    dataSource[nextIndex] = dataSource[preIndex];
    dataSource[preIndex] = temp;
    return dataSource;
}