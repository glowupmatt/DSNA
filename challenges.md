# Coding Challenges

## Challenge 1: Classic Fizz Buzz
Write a function that prints numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

### Example Output:
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
```

---

## Challenge 2: Extended Fizz Buzz
Modify the Fizz Buzz logic to work for a dynamic range and custom divisors. Write a function that accepts four arguments:
1. `start` - The starting number.
2. `end` - The ending number.
3. `divisor1` - The first divisor.
4. `divisor2` - The second divisor.

Print "Fizz" for multiples of `divisor1`, "Buzz" for multiples of `divisor2`, and "FizzBuzz" for numbers divisible by both.

### Example:
```javascript
extendedFizzBuzz(10, 30, 2, 7);
```

### Example Output:
```
Buzz
11
Fizz
13
Fizz
15
FizzBuzz
17
Fizz
19
Buzz
Fizz
...
```

---

## Challenge 3: Filter and Sort Array of Objects
Given an array of objects representing employees, filter out employees below a certain age and sort the remaining ones by their name alphabetically.

### Example Input:
```javascript
const employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 20 },
];
```

Write a function `filterAndSortEmployees(employees, minAge)`.

### Example Call:
```javascript
filterAndSortEmployees(employees, 23);
```

### Example Output:
```javascript
[
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 28 }
]
```

---

## Challenge 4: Group Array of Objects by Key
Write a function that groups an array of objects by a specific key.

### Example Input:
```javascript
const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "pear" },
  { category: "vegetable", name: "spinach" },
];
```

Write a function `groupBy(data, key)`.

### Example Call:
```javascript
groupBy(data, "category");
```

### Example Output:
```javascript
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
```

---

## Challenge 5: Find the Oldest Person
Given an array of objects representing people with their names and ages, write a function to find the oldest person.

### Example Input:
```javascript
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 35 },
];
```

Write a function `findOldestPerson(people)`.

### Example Output:
```javascript
{ name: "Bob", age: 45 }
```

---

## Challenge 6: Add Unique Identifier to Each Object
Write a function that takes an array of objects and adds a unique identifier (`id`) to each object. The `id` should start from 1 and increment for each object.

### Example Input:
```javascript
const items = [
  { name: "item1", value: 100 },
  { name: "item2", value: 200 },
  { name: "item3", value: 300 },
];
```

Write a function `addUniqueIds(items)`.

### Example Output:
```javascript
[
  { id: 1, name: "item1", value: 100 },
  { id: 2, name: "item2", value: 200 },
  { id: 3, name: "item3", value: 300 },
]
```

---

## Challenge 7: Flatten a Nested Array of Objects
Given an array of objects where each object can contain a nested array of objects, write a function to flatten it into a single array.

### Example Input:
```javascript
const nestedArray = [
  {
    name: "parent1",
    children: [
      { name: "child1" },
      { name: "child2" },
    ],
  },
  {
    name: "parent2",
    children: [
      { name: "child3" },
      { name: "child4" },
    ],
  },
];
```

Write a function `flattenArray(nestedArray)`.

### Example Output:
```javascript
[
  { name: "parent1" },
  { name: "child1" },
  { name: "child2" },
  { name: "parent2" },
  { name: "child3" },
  { name: "child4" },
]
```

---

## Challenge 8: Merge Two Arrays of Objects by Key
Write a function that merges two arrays of objects based on a specific key. If an object with the same key exists in both arrays, merge their properties.

### Example Input:
```javascript
const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 3, name: "Charlie", age: 30 },
];
```

Write a function `mergeArrays(arr1, arr2, key)`.

### Example Call:
```javascript
mergeArrays(arr1, arr2, "id");
```

### Example Output:
```javascript
[
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie", age: 30 },
]
```

---

## Challenge 9: Count Occurrences of a Key Value
Write a function that counts the occurrences of a specific value for a key in an array of objects.

### Example Input:
```javascript
const items = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "apple" },
];
```

Write a function `countOccurrences(items, key, value)`.

### Example Call:
```javascript
countOccurrences(items, "name", "apple");
```

### Example Output:
```
2
```

---

## Challenge 10: Sort Array of Objects by Nested Key
Write a function that sorts an array of objects based on a nested key.

### Example Input:
```javascript
const products = [
  { name: "product1", details: { price: 300 } },
  { name: "product2", details: { price: 100 } },
  { name: "product3", details: { price: 200 } },
];
```

Write a function `sortByNestedKey(products, nestedKey)`.

### Example Call:
```javascript
sortByNestedKey(products, "details.price");
```

### Example Output:
```javascript
[
  { name: "product2", details: { price: 100 } },
  { name: "product3", details: { price: 200 } },
  { name: "product1", details: { price: 300 } },
]
```
