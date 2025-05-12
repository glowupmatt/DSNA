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