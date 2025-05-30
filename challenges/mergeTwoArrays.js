const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 3, name: "Charlie", age: 30 },
];

const expected = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie", age: 30 },
];

function mergeArrays(arr1, arr2, key) {
  //we have two arrays
  //we need to find the key that they want to find similar then merge them together
  //we can merge the arrays together into one array
  //Then we can create an object with the id key inside the loop
  //we can return the Object.values as an array
  const merged = [...arr1, ...arr2];
  const res = {};
  for (let i = 0; i < merged.length; i++) {
    const val = merged[i];
    const useKey = val[key];
    if (res[useKey]) {
      res[useKey] = { ...res[useKey], ...val };
    } else {
      res[useKey] = val;
    }
  }

  return Object.values(res);
}

console.log(mergeArrays(arr1, arr2, "id"));
