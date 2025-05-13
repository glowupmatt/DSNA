import findOldestPerson from "../challenges/findOldestPerson.js";
import { expect } from "chai";

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 35 },
];

describe("findOldestPerson", () => {
  it("Return the oldest person in the array", () => {
    const expected = { name: "Bob", age: 45 };
    expect(findOldestPerson(people)).to.deep.equal(expected);
  });
});
