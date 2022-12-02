//! Union  are helpful if do not know what type of data type you are dealing with

let score: number | string = 33; // syntax, you can say either number or string
score = 44;
score = "55";

//what if you build an app with strict types?
type User1 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ianMcBee: User1 | Admin = { name: "ian", id: 334 };

ianMcBee = { username: "im", id: 334 }; //without |, you will get an error

//example in a function
function getDbId(id: number | string) {
  // making some API calls
  console.log(`Db id is ${id}`);
}

getDbId(3);
getDbId("4");

function getDbId1(id: number | string) {
  //id.toLowerCase(); // error message because id cannot be lowerCased
  if (typeof id === "string") {
    id.toLowerCase();
    // the if conditional is saying that it will become a string
  }
}

//example of arrays
const data: number[] = [1, 2, 3, 4]; // you can't have a string when defined
//const data2: string | number[] = ["1","2","3","4"]; // this is not correct with syntax
const data3: (string | number | boolean)[] = ["1", 2, "3", true]; // this is not correct with syntax

//?for strict numbers
let pi: 3.14 = 3.14;
//pi = 3.145 //error because you can't change this number

let seatAllotment: "aisle" | "middle" | "window"; //real life example in commerical airlines
// you can't change this variable because it is only these examples above
