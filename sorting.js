/**
 * 排序算法实现
 * 包含：冒泡排序、快速排序、选择排序
 */

// ==================== 冒泡排序 ====================
/**
 * 冒泡排序 - 时间复杂度 O(n²)
 * 重复地比较相邻的两个元素，如果顺序错误就交换
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} - 排序后的数组
 */
function bubbleSort(arr) {
    const n = arr.length;
    const result = [...arr]; // 复制数组，不修改原数组

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                // 交换元素
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }

    return result;
}

// ==================== 快速排序 ====================
/**
 * 快速排序 - 平均时间复杂度 O(n log n)
 * 选择一个基准元素，将数组分为两部分，递归排序
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} - 排序后的数组
 */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// ==================== 选择排序 ====================
/**
 * 选择排序 - 时间复杂度 O(n²)
 * 每次从未排序部分选择最小元素，放到已排序部分的末尾
 * @param {number[]} arr - 待排序数组
 * @returns {number[]} - 排序后的数组
 */
function selectionSort(arr) {
    const n = arr.length;
    const result = [...arr]; // 复制数组，不修改原数组

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // 找到最小元素的索引
        for (let j = i + 1; j < n; j++) {
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        // 将最小元素与当前位置交换
        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }

    return result;
}

// ==================== 测试代码 ====================
function testSortingAlgorithms() {
    const testArray = [64, 34, 25, 12, 22, 11, 90, 5, 45, 78, 33, 67];

    console.log('原始数组:', testArray);
    console.log('----------------------------------------');

    // 测试冒泡排序
    const bubbleResult = bubbleSort(testArray);
    console.log('冒泡排序结果:', bubbleResult);

    // 测试快速排序
    const quickResult = quickSort(testArray);
    console.log('快速排序结果:', quickResult);

    // 测试选择排序
    const selectionResult = selectionSort(testArray);
    console.log('选择排序结果:', selectionResult);

    console.log('----------------------------------------');

    // 验证所有排序结果是否一致
    const allEqual = JSON.stringify(bubbleResult) === JSON.stringify(quickResult) &&
                     JSON.stringify(quickResult) === JSON.stringify(selectionResult);
    console.log('所有排序结果一致:', allEqual ? '✅ 是' : '❌ 否');
}

// 运行测试
testSortingAlgorithms();

// 导出函数（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { bubbleSort, quickSort, selectionSort };
}
