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
// console.log(groupBy(data, "category"))
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