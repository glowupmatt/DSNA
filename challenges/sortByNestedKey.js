const products = [
  { name: "product1", details: { price: 300 } },
  { name: "product2", details: { price: 100 } },
  { name: "product3", details: { price: 200 } },
];

const expected = [
  { name: "product2", details: { price: 100 } },
  { name: "product3", details: { price: 200 } },
  { name: "product1", details: { price: 300 } },
];

function getNestedValue(obj, key) {
  //create a recursive function that will check if there is a nested object
  //we want a based case of if the object contains the key
  //if it doesnt we will return undefined
  //if it does we will return the value of the key we were looking for
  if (typeof obj !== "object") return undefined;
  if (obj.hasOwnProperty(key)) return obj[key];
  for (const val in obj) {
    if (val === key) return obj[key];
    if (typeof obj[val] === "object") {
      const hasKey = getNestedValue(obj[val], key);
      if (hasKey !== undefined) return hasKey;
    }
  }
  return undefined;
}

function sortByNestedKey(products, key) {
  return products.sort((a, b) => {
    const aValue = getNestedValue(a, key);
    const bValue = getNestedValue(b, key);
    return aValue - bValue;
  });
}
console.log(sortByNestedKey(products, "price"));
