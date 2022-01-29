function fizzBuzz(n: number): void {
  if (n > 0 && n < 200000) {
    for (let i = 1; i <= n; i++) {
      switch (true) {
        case i % 3 === 0 && i % 5 === 0:
          console.log('FizzBuzz');
          break;
        case i % 3 === 0:
          console.log('Fizz');
          break;
        case i % 5 === 0:
          console.log('Buzz');
          break;
        default:
          console.log(i);
          break;
      }
    }
  }
}

export default fizzBuzz;
