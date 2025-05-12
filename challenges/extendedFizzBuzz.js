// ExtendedFizzBuzz
function extendedFizzBuzz(start, end, divisor1, divisor2) {
  //Print buzz for multiples of divisor1
  //Print fizz for multiples of divisor2
  //Print FizzBuzz for multiples of both

  while (start < end) {
    if (start % divisor1 === 0 && start % divisor2 === 0) {
      console.log("FizzBuzz")
    } else if (start % divisor1 === 0) {
      console.log("Buzz")
    } else if (start % divisor2 === 0) {
      console.log("Fizz")
    } else {
      console.log(start)
    }
    
    start++
  }
}
// extendedFizzBuzz(10, 30, 2, 7)