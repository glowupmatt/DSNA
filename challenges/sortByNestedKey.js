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
  if (obj == null || typeof obj !== "object") return undefined;
  if (obj.hasOwnProperty(key)) return obj[key];
  for (const k in obj) {
    if (typeof obj[k] === "object") {
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
