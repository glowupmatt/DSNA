// FIZZBUZZ
// Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let i = 1;
  while (i < 20) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else if (i % 3 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(i)
    }
    i++
  }
}
// fizzBuzz()

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

// Given an array of objects representing employees, filter out employees 
// below a certain age and sort the remaining ones by their name alphabetically.

const employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 20 },
];

function filterAndSortEmployees(employees, minAge) {
  return employees
    .filter(({ name, age }) => age > minAge)
    .sort((a, b) => a.name.localeCompare(b.name))
}

console.log(filterAndSortEmployees(employees, 23));