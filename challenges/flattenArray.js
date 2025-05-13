const nestedArray = [
  {
    name: "parent1",
    children: [{ name: "child1" }, { name: "child2" }],
  },
  {
    name: "parent2",
    children: [{ name: "child3" }, { name: "child4" }],
  },
];

const expected = [
  { name: "parent1" },
  { name: "child1" },
  { name: "child2" },
  { name: "parent2" },
  { name: "child3" },
  { name: "child4" },
];

function flattenArray(nestedArray) {
  let result = [];
  for (let i = 0; i < nestedArray.length; i++) {
    const val = nestedArray[i];
    result.push({ name: val.name });
    if (val.children) {
      result = result.concat(flattenArray(val.children));
    }
  }
  return result;
}

console.log(flattenArray(nestedArray));
