// Write a coin machine in a language of your choice.

// Given 87 cents, return the minimum number of coins (quarters, dimes, nickels, and pennies).

// The program should be able to handle different values for coins, as well as different numbers of coins.
// For example:
// `cash = 87, coins = [25, 10, 5, 1]`
// `cash = 27, coins = [10, 2, 1]`

// return total number of coins

// ===
// Do not use AI (including tab completion) for this task.
// Looking up syntax on the internet is fine.

// coins = [25, 10, 5, 1]
// return an error if it doesnt equal exact
// array wont always be sorted
function coinMachine(cash, arr) {
  // Sort the array in descending order (largest coins first)
  const sortedArray = arr.sort((a, b) => b - a);
  let remainingCash = cash;
  let count = 0;

  // Process each coin denomination
  for (let i = 0; i < sortedArray.length; i++) {
    const currCoin = sortedArray[i];

    // Use as many of the current coin as possible
    while (remainingCash >= currCoin) {
      remainingCash -= currCoin;
      count++;
    }
  }

  // Check if we were able to make exact change
  if (remainingCash === 0) {
    return count;
  } else {
    throw new Error("Not Enough Change");
  }
}

console.log(coinMachine(87, [25, 10, 5, 1])); // Should output 6 (3 quarters, 1 dime, 0 nickels, 2 pennies)
console.log(coinMachine(27, [10, 2, 1])); // Should output 6 (2 tens, 3 twos, 1 penny)
