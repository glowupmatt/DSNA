import chai from "chai";
import mochaAsync from "./mochaAsync.js";
import gHappy from "../challenges/gHappy.js";

const should = chai.should();

describe("gHappy.js", () => {
  it(
    "should return true for xxgggxyz",
    mochaAsync(async () => {
      try {
        const result = gHappy.run("xxgggxyz");
        result.should.equal(true);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return false for xxgggxyg",
    mochaAsync(async () => {
      try {
        const result = gHappy.run("xxgggxyg");
        result.should.equal(false);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return false for xxggyygxx",
    mochaAsync(async () => {
      try {
        const result = gHappy.run("xxggyygxx");
        result.should.equal(false);
      } catch (err) {
        throw err;
      }
    })
  );
  it(
    "should return true for xxgggxygg",
    mochaAsync(async () => {
      try {
        const result = gHappy.run("xxgggxygg");
        result.should.equal(true);
      } catch (err) {
        throw err;
      }
    })
  );
});
