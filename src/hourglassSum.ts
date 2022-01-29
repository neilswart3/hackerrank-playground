function hourglassSum(arr: number[][]): number {
  let hourGlassSumArray: number[] = [];

  for (let row = 0; row < arr.length; row++) {
    const rowCurrent = arr[row];
    const rowNext = arr[row + 1];
    const rowAfterNext = arr[row + 2];

    for (let i = 0; i < rowCurrent.length; i++) {
      console.log('rowCurrent:', rowCurrent[i + 2]);
      console.log('rowAfterNext:', rowAfterNext[i + 2]);

      if (!!rowCurrent[i + 2] && !!rowAfterNext[i + 2]) {
        console.log('test');
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
    // console.log('hourGlassSumArray:', hourGlassSumArray);
  }

  console.log('bal');
  console.log('hourGlassSumArray:', hourGlassSumArray);

  return 7;
}

export default hourglassSum;
