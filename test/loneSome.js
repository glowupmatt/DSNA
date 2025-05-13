import chai from "chai";
import mochaAsync from "./mochaAsync.js";
import loneSome from "../challenges/loneSome.js";

const should = chai.should();

describe("loneSome.js", () => {
  it(
    "should return 6 for (1, 2, 3)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(1, 2, 3);
        result.should.be.a("number");
        result.should.equal(6);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return 9 for (4, 2, 3)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(4, 2, 3);
        result.should.be.a("number");
        result.should.equal(9);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return 0 for (3, 3, 3)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(3, 3, 3);
        result.should.be.a("number");
        result.should.equal(0);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return 9 for (9, 2, 2)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(9, 2, 2);
        result.should.be.a("number");
        result.should.equal(9);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return 9 for (2, 9, 2)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(2, 9, 2);
        result.should.be.a("number");
        result.should.equal(9);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return 9 for (9, 2, 2)",
    mochaAsync(async () => {
      try {
        const result = await loneSome.run(2, 2, 9);
        result.should.be.a("number");
        result.should.equal(9);
      } catch (err) {
        throw err;
      }
    })
  );
});
