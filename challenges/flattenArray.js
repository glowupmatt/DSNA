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

  //loop through the array and we need to push anything that isn't an array inside the result array
  //inside the loop we need to check if it is an array
  //if not we push it
  //else we will recursively loop through the nested Array

  for (let i = 0; i < nestedArray.length; i++) {
    const value = nestedArray[i];

    result.push({ name: value.name });
    if (value.children) {
      result = result.concat(flattenArray(value.children));
    }
  }
  return result;
}

console.log(flattenArray(nestedArray));
