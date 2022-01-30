function diagonalDifference(arr: number[][]): number {
  let leftRight = 0;
  let rightLeft = 0;

  for (let rowI = 0; rowI < arr.length; rowI++) {
    for (let itemI = 0; itemI < arr[rowI].length; itemI++) {
      if (rowI === itemI) {
        leftRight += arr[rowI][itemI];
      }

      if (rowI === arr.length - itemI - 1) {
        rightLeft += arr[rowI][itemI];
      }
    }
  }

  return Math.abs(leftRight - rightLeft);
}

export default diagonalDifference;
