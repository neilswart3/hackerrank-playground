function findMedian(arr: number[]): number {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const medianIndex = Math.floor(sortedArr.length / 2);

  return sortedArr[medianIndex];
}

export default findMedian;
