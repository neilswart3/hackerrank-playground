function plusMinus(arr: number[]): void {
  let positive = 0;
  let negative = 0;
  let zeros = 0;

  arr.forEach((num) => {
    switch (true) {
      case num > 0:
        positive++;
        break;
      case num < 0:
        negative++;
        break;
      default:
        zeros++;
        break;
    }
  });

  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

export default plusMinus;
