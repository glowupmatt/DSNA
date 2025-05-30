const items = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "apple" },
];

const expected = 2;

function countOccurrences(arr, key, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (val[key] === value) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences(items, "name", "apple"));
