function rotLeft(a: number[], d: number): number[] {
  if (a.length === 0) return a;

  let rotArray = a;

  for (let i = 0; i < d; i++) {
    const numShift = rotArray.shift();
    rotArray.push(numShift!);
  }

  return rotArray;
}

export default rotLeft;
