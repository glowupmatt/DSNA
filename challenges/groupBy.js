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
  //we want the res to contain an array of objects that have to same key
  //so if do a category we can create an array where the key to the arrays will be the value of the category
  //{
  //fruit : []
  //vegetable:[]
  //}
  //we will just push the object into the response

  for (let i = 0; i < data.length; i++) {
    //we need to check if the category already exist
    //if it does then we will push it in that array else
    //we will create it
    const val = data[i];
    if (res[val[key]]) {
      res[val[key]].push(val);
    } else {
      res[val[key]] = [val];
    }
  }
  return res;
}

console.log(groupBy(data, "category"));

export default groupBy;
