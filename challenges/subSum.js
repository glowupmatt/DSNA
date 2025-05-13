export default function (x, y) {
  /*
		You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)
	
		Example:
	
		-1  1  5        
		9  3  7		function(1, 0) => 0
		2  8  4		function(0, 1) => 8
		
		function(1, 1) => 12
		0, 0 === -1
		0, 1 === 1
		1, 0 === 9
		1, 1 === 3
		____________
					12
	
		Write your code below the comment.
	*/

  // we find the co-ordinates from the left most number
  // the increment upward from the 0 to x and 0 to y
  // this could be done by incrementing upward untill we reach the numbers in the parameters
  // and adding all the numbers that are met along the way
  const twoDArray = [
    [0, 4, 2, 1],
    [3, -1, 1, 0],
    [0, 0, 2, 3],
    [1, 3, -3, 0],
  ];

  let sum = 0;

  for (let col = 0; col <= x; col++) {
    for (let row = 0; row <= y; row++) {
      const currVal = twoDArray[row][col];
      sum += currVal;
    }
  }
  return sum;
}
