const fizzBuzz = (n: number): string[] =>
  Array.from({ length: n }, (_, i) => {
    if ((i + 1) % 3 === 0 && (i + 1) % 5 === 0) {
      return "FizzBuzz";
    } else if ((i + 1) % 5 === 0) {
      return "Buzz";
    } else if ((i + 1) % 3 === 0) {
      return "Fizz";
    } else {
      return (i + 1).toString();
    }
  });
