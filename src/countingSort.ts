function countingSort(arr: number[]): number[] {
  let countsArr: number[] = [];

  for (let i = 0; i < 100; i++) {
    countsArr.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    countsArr[arr[i]]++;
  }

  return countsArr;
}

export default countingSort;
