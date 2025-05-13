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
  //need to create a function that will check if there is an Object nested
  //we will also check if we find the key in the obj
  //if we find the key then we will return the result
  //if we dont we return undefined or null
  if (typeof obj !== "object") return undefined;
  if (obj.hasOwnProperty(key)) return obj[key];

  for (let val in obj) {
    if (val === key) return obj[val];
    if (typeof obj[val] === "object") {
      const found = getNestedValue(obj[k], key);
      if (found !== undefined) return found;
    }
  }
  return undefined;
}

function sortByNestedKey(products, key) {
  return products.slice().sort((a, b) => {
    const aVal = getNestedValue(a, key);
    const bVal = getNestedValue(b, key);
    return aVal - bVal;
  });
}
sortByNestedKey(products, "price");
