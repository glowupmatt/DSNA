const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 35 },
];

function findOldestPerson(arr) {
  return arr.reduce((prev, person) => {
    if (person.age > prev.age) {
      return person;
    } else {
      return prev;
    }
  }, arr[0]);
}

console.log(findOldestPerson(people));

export default findOldestPerson;
