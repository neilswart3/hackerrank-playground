function sockMerchant(_n: number, ar: number[]): number {
  let pairs = 0;
  const socksArr = ar.sort();

  for (let i = 0; i < socksArr.length; i++) {
    if (socksArr[i] === socksArr[i + 1]) {
      pairs++;
      i++;
    }
  }

  return pairs;
}

export default sockMerchant;
