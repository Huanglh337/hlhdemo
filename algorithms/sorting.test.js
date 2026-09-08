/**
 * 排序算法单元测试
 */

const { bubbleSort, quickSort, selectionSort } = require('./sorting');

describe('排序算法测试', () => {

    // 冒泡排序测试
    describe('冒泡排序 (bubbleSort)', () => {
        test('应该正确排序数组', () => {
            const arr = [64, 34, 25, 12, 22, 11, 90];
            const sorted = bubbleSort(arr);
            expect(sorted).toEqual([11, 12, 22, 25, 34, 64, 90]);
        });

        test('应该不修改原数组', () => {
            const arr = [3, 1, 2];
            const original = [...arr];
            bubbleSort(arr);
            expect(arr).toEqual(original);
        });

        test('应该处理空数组', () => {
            expect(bubbleSort([])).toEqual([]);
        });

        test('应该处理单个元素', () => {
            expect(bubbleSort([1])).toEqual([1]);
        });

        test('应该处理已排序数组', () => {
            expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理逆序数组', () => {
            expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理重复元素', () => {
            expect(bubbleSort([3, 1, 3, 1, 3])).toEqual([1, 1, 3, 3, 3]);
        });
    });

    // 快速排序测试
    describe('快速排序 (quickSort)', () => {
        test('应该正确排序数组', () => {
            const arr = [64, 34, 25, 12, 22, 11, 90];
            const sorted = quickSort(arr);
            expect(sorted).toEqual([11, 12, 22, 25, 34, 64, 90]);
        });

        test('应该不修改原数组', () => {
            const arr = [3, 1, 2];
            const original = [...arr];
            quickSort(arr);
            expect(arr).toEqual(original);
        });

        test('应该处理空数组', () => {
            expect(quickSort([])).toEqual([]);
        });

        test('应该处理单个元素', () => {
            expect(quickSort([1])).toEqual([1]);
        });

        test('应该处理已排序数组', () => {
            expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理逆序数组', () => {
            expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理重复元素', () => {
            expect(quickSort([3, 1, 3, 1, 3])).toEqual([1, 1, 3, 3, 3]);
        });
    });

    // 选择排序测试
    describe('选择排序 (selectionSort)', () => {
        test('应该正确排序数组', () => {
            const arr = [64, 34, 25, 12, 22, 11, 90];
            const sorted = selectionSort(arr);
            expect(sorted).toEqual([11, 12, 22, 25, 34, 64, 90]);
        });

        test('应该不修改原数组', () => {
            const arr = [3, 1, 2];
            const original = [...arr];
            selectionSort(arr);
            expect(arr).toEqual(original);
        });

        test('应该处理空数组', () => {
            expect(selectionSort([])).toEqual([]);
        });

        test('应该处理单个元素', () => {
            expect(selectionSort([1])).toEqual([1]);
        });

        test('应该处理已排序数组', () => {
            expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理逆序数组', () => {
            expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        });

        test('应该处理重复元素', () => {
            expect(selectionSort([3, 1, 3, 1, 3])).toEqual([1, 1, 3, 3, 3]);
        });
    });

    // 综合测试
    describe('综合测试', () => {
        test('所有排序算法结果应该一致', () => {
            const arr = [64, 34, 25, 12, 22, 11, 90, 5, 45, 78, 33, 67];
            const bubbleResult = bubbleSort(arr);
            const quickResult = quickSort(arr);
            const selectionResult = selectionSort(arr);

            expect(bubbleResult).toEqual(quickResult);
            expect(quickResult).toEqual(selectionResult);
        });

        test('应该处理大数组', () => {
            const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
            const sorted = bubbleSort(arr);
            const expected = [...arr].sort((a, b) => a - b);
            expect(sorted).toEqual(expected);
        });
    });
});
