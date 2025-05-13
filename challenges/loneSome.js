export default function (a, b, c) {
  /*
Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

Examples:
	function(1, 2, 3) => 6
	function(3, 2, 3) => 2
	function(3, 3, 3) => 0

Write your code below the comment.

*/
  // let sum = 0
  // if (a !== b && a !== c) sum += a
  // if (b !== a && b !== c) sum += b
  // if (c !== a && b !== c) sum += c
  // return sum

  //we want to dynamically take in an infinante amount of arguments instead of three arguments
  //with this we can use the arguments key word and spread it out in its own variable
  //next we need to check if we have seen the number more than once
  //if we have seen the value more than once we will skip it
  //The way we do this is by creating a hash map that will keep count of each seen number if its there more than once then it will be greater than one
  //Then we can filter all the values that are greater than one and add them together.

  const args = [...arguments];

  const seen = args.reduce((map, currVal) => {
    return map.set(currVal, (map.get(currVal) || 0) + 1);
  }, new Map());

  return [...seen.entries()]
    .filter(([_, value]) => value === 1)
    .reduce((sum, [key, _]) => (sum += key), 0);
}
