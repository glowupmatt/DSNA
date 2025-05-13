//Group Array Of Object By Key
const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "pear" },
  { category: "vegetable", name: "spinach" },
];

function groupBy(data, key) {
  const res = {};
  for (let i = 0; i < data.length; i++) {
    const value = data[i];
    if (res[value[key]]) {
      res[value[key]].push(value);
    } else {
      res[value[key]] = [value];
    }
  }
  return res;
}

console.log(groupBy(data, "category"));

export default groupBy;
