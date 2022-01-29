function jumpingOnClouds(c: number[]): number {
  let jumps = 0;

  for (let i = 0; i < c.length; i++) {
    if (c[i + 2] === 1) {
      jumps++;
    } else if (c[i + 2] === 0) {
      jumps++;
      i++;
    } else if (c[i + 2] === undefined && c[i + 1] === 0) {
      jumps++;
    }
  }

  return jumps;
}

export default jumpingOnClouds;
