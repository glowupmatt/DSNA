import groupBy from "../challenges/groupBy.js";
import { expect } from "chai";

const data = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "fruit", name: "pear" },
  { category: "vegetable", name: "spinach" },
];

describe("groupBy", () => {
  it("groups objects by the specified key, returning an object whose properties are arrays of objects with matching key values", () => {
    const expected = {
      fruit: [
        { category: "fruit", name: "apple" },
        { category: "fruit", name: "banana" },
        { category: "fruit", name: "pear" },
      ],
      vegetable: [
        { category: "vegetable", name: "carrot" },
        { category: "vegetable", name: "spinach" },
      ],
    };
    expect(groupBy(data, "category")).to.deep.equal(expected);
  });
});
