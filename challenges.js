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

//Filter and Sort
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

/* 
Expected Out put 
[
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 28 }
]
 */
// console.log(filterAndSortEmployees(employees, 23));

//Group Array Of Object By Key
const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "pear" },
  { category: "vegetable", name: "spinach" },
];

function groupBy(data, key) {
  //we want to create an object that is organized by the key
  //we need to create a response object
  //loop through all the values in the data array
  //create a key value pair based off of the key passed
  //put the values in the array of the key
  const res = {}
  for (let i = 0; i < data.length; i++){
    const value = data[i];
    if (res[value[key]]) {
      res[value[key]].push(value)
    } else {
      res[value[key]] = [value]
    }
  }
  return res
}
console.log(groupBy(data, "category"))
/*
{
  fruit: [
    { category: "fruit", name: "apple" },
    { category: "fruit", name: "banana" },
    { category: "fruit", name: "pear" },
  ],
  vegetable: [
    { category: "vegetable", name: "carrot" },
    { category: "vegetable", name: "spinach" },
  ],
}
*/
