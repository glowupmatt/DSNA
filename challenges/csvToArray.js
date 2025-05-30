export default function parseCSV(csv) {
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
  // FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13
  //          ,        ,   \n   ,    ,  \n   ,    ,  \n       ,    ,
  //We can split the headers by splitting "\n" and grabbing the 0th index
  //We can find the values by grabbing slicing the 0th index from the string
  //Same with the , to get the exact values
  //Then we can do a loop grabbing the headers and inside the loop do another loop attaching the values
  //To the header values and return the obj

  const res = [];
  const headers = csv.split("\n")[0].split(",");
  const values = csv
    .split("\n")
    .slice(1)
    .map((val) => val.split(","));

  for (let i = 0; i < headers.length; i++) {
    const user = {};
    for (let k = 0; k < values.length; k++) {
      const key = headers[k];
      const val = values[i][k];

      user[key] = val;
    }
    res.push(user);
  }
  console.log(res);
}

parseCSV("FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13");
