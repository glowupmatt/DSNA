import chai from "chai";
import mochaAsync from "./mochaAsync.js";
import errorHandlingII from "../challenges/errorHandlingII.js";

const should = chai.should();

describe("errorHandlingII.js", () => {
  it(
    "should return error properly",
    mochaAsync(async () => {
      try {
        const result = await errorHandlingII.run(
          "https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey="
        );
        result.should.equal("Error: Request failed with status code 401");
      } catch (err) {
        throw err;
      }
    })
  );
});
