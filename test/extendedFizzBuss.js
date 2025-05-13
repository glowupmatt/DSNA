import { strict as assert } from "assert";

// We'll need to capture console.log output to test this function
import extendedFizzBuzz from "../challenges/extendedFizzBuzz.js";

function captureConsoleLog(fn) {
  const output = [];
  const originalLog = console.log;
  console.log = (msg) => output.push(msg);
  try {
    fn();
  } finally {
    console.log = originalLog;
  }
  return output;
}

describe("extendedFizzBuzz", () => {
  it("prints correct sequence for 10 to 17, divisors 2 and 7", () => {
    const expected = ["Buzz", 11, "Buzz", 13, "FizzBuzz", 15, "Buzz"];
    const output = captureConsoleLog(() => extendedFizzBuzz(10, 17, 2, 7));
    assert.deepEqual(output, expected);
  });
});
