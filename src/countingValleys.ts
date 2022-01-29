function countingValleys(_steps: number, path: string): number {
  let alt = 0;
  let valleys = 0;
  const pathArr = path.toUpperCase().split('');

  for (let i = 0; i < pathArr.length; i++) {
    const prevAlt = alt;

    if (pathArr[i] === 'U') alt++;
    if (pathArr[i] === 'D') alt--;

    if (prevAlt === -1 && alt === 0) {
      valleys++;
    }
  }

  return valleys;
}

export default countingValleys;
