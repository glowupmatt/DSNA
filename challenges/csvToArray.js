export default function (csv) {
  /*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/

  //Need to split the keys and the values from each other
  //each value is split from \n so I can grab the first value in the split array to make rows
  //will look like FirstName,LastName,Age and split from the comma to be in an array
  //then i can create a new array from the actual data names and ages ect...
  //i need two loops kinda following a matrix like data structure
  //create an object and loop through the data to add into the res array

  //grab the keys for each value kinda like the Table header
  //grab all the values in an array and split them in to their own value
  //loop through the keys
  //loop through the values inside of the keys loop
  //then create an object for each array
  //add the object to a response array
  //return the response array
  //			cols
  //rows	FirstName		LastName		Age
  //		  Dan					Tran				29
  //		  Don					ricka				25
  //		  Jasminse		pullser			29
  const csvData = csv.split("\n");
  const headers = csvData[0].split(",");
  const data = csvData.slice(1).map((d) => d.split(","));
  let res = [];
  for (let row = 0; row < data.length; row++) {
    let obj = {};
    for (let col = 0; col < headers.length; col++) {
      obj[headers[col]] = data[row][col];
    }
    res.push(obj);
  }
  return res;
}
