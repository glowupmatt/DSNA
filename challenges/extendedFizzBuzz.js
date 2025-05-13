function extendedFizzBuzz(start, end, divisor1, divisor2) {
  while (start < end) {
    if (start % divisor1 === 0 && start % divisor2 === 0) {
      console.log("FizzBuzz");
    } else if (start % divisor1 === 0) {
      console.log("Buzz");
    } else if (start % divisor2 === 0) {
      console.log("Fizz");
    } else {
      console.log(start);
    }

    start++;
  }
}

export default extendedFizzBuzz;
