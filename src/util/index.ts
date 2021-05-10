/* eslint-disable for-direction */
/**
 * 快速排序
 * @param arr 数组
 */
function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) return arr;
  const privotIndex = Math.floor(arr.length / 2);
  const privot = arr.splice(privotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < privotIndex; i += 1) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(privot, quickSort(right));
}

/**
 * 冒泡排序
 * @param arr 数组
 */
export function sort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length - 1; i += 1) {
    // eslint-disable-next-line for-direction
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      let temp: T;
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        // eslint-disable-next-line no-param-reassign
        arr[j] = arr[j + 1];
        // eslint-disable-next-line no-param-reassign
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

export default quickSort;
