import filterAndSortEmployees from "../challenges/filterAndSort.js";
import { expect } from "chai";

const employees = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 20 },
];

describe("filterAndSortEmployees", () => {
  it("Should return an employees array filtering bases on age", () => {
    const expected = [
      { name: "Alice", age: 25 },
      { name: "Charlie", age: 28 },
    ];
    expect(filterAndSortEmployees(employees, 23)).to.deep.equal(expected);
  });
});
