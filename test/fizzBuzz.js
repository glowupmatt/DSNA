import fizzBuzz from '../challenges/fizzBuzz.js';
import { expect } from 'chai';

describe('fizzBuzz', () => {
  it('returns correct FizzBuzz sequence for 1 to 15', () => {
    const expected = [
      1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz',
      11, 'Fizz', 13, 14, 'FizzBuzz'
    ];
    expect(fizzBuzz(16)).to.deep.equal(expected);
  });
});