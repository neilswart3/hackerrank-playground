function hourglassSum(arr: number[][]): number {
  let hourGlassSumArray: number[] = [];

  for (let row = 0; row < arr.length; row++) {
    const rowCurrent = arr[row];
    const rowNext = arr[row + 1];
    const rowAfterNext = arr[row + 2];

    for (let i = 0; i < rowCurrent.length; i++) {
      if (rowAfterNext && rowAfterNext[1 + 2]) {
        const top = rowCurrent[i] + rowCurrent[i + 1] + rowCurrent[i + 2];
        const middle = rowNext[i + 1];
        const bottom =
          rowAfterNext[i] + rowAfterNext[i + 1] + rowAfterNext[i + 2];

        const sum = top + middle + bottom;

        if (!isNaN(sum)) {
          hourGlassSumArray = [...hourGlassSumArray, sum];
        }
      }
    }
  }

  const [largest] = hourGlassSumArray.sort((a, b) => b - a);

  return largest;
}

export default hourglassSum;
