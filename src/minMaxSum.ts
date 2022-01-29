function minMaxSum(arr: number[]): void {
  const minArr = [...arr].sort((a, b) => a - b).slice(0, 4);
  const maxArr = [...arr].sort((a, b) => b - a).slice(0, 4);

  const minSum = minArr.reduce((a, b) => a + b, 0);
  const maxSum = maxArr.reduce((a, b) => a + b, 0);

  console.log(`${minSum} ${maxSum}`);
}

export default minMaxSum;
