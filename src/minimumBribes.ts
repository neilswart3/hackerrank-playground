function minimumBribes(q: number[]): void {
  let totalBribes = 0;
  let numBribes = 0;

  for (let i = 0; i < q.length; i++) {
    const initialPos = q[i];
    const currentPos = i + 1;
    const nextNumber = q[i + 1];

    if (initialPos > currentPos) {
      numBribes = initialPos - currentPos;
      totalBribes += numBribes;
    } else if (
      nextNumber &&
      nextNumber < currentPos &&
      initialPos === currentPos
    ) {
      numBribes = initialPos - nextNumber;
      totalBribes += numBribes;
    } else if (initialPos > nextNumber) {
      numBribes = currentPos - initialPos;
      totalBribes += numBribes;
    } else {
      numBribes = 0;
    }

    if (numBribes > 2) {
      console.log('Too chaotic');
      return;
    }
  }

  console.log(totalBribes);
}

export default minimumBribes;
