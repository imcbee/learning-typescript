function addTwo(num: number): number {
  //! number defined prevents different data types in arguments
  //num.toUpperCase(); // I should not be able to do this, but any is there
  // this will take a number and add two

  return num + 2;
  //return "hello"; // specifying the return at the function will ensure the specific type you are expecting
}

let myValue = addTwo(5); // in the case of return a type not expected,

//addTwo("5"); // the problem is that num argument is an any
// a quoted number should not work, but it does

addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase(); // this is letting do this again because of any
}

//getUpper(4); // this again should not work, so change argument to string instead of any
getUpper("Ian McBee");

function signUpUser(name: string, email: string, isPaid: boolean) {}

//signUpUser(1, 2, 3); // this won't work because arguments are defined to a type
signUpUser("Ian", "imcbee@awesome.com", true);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
// how can I pass on default values

loginUser("Ian", "i@i.com"); // the boolean value will be default

function getValue(myVal: number) {
  // if the function has a conditional giving different types
  if (myVal > 5) {
    return true;
  }

  return "200 OK";
}

const getHello = (s: string): string => {
  return ""; // this can work because the function is expecting and return a string
};

//const heros = ["thor", "spiderman", "ironman"];
const heros = [1, 2, 3];

heros.map((hero): string => {
  // hero is already knowing that the input is a string or a number
  //you don't need to define hero as a string type
  return `hero is ${hero}`;

  // but what is the return type?
  //return 1; this won't work because string is defined as a type
});

//! Read the documentation
function consoleError(err: string): void {
  // you need to provide a return type for console errors
  //? void means that it will not return anything

  console.log(err);
}
function handleError(err: string): never {
  // you need to provide a return type for console errors

  throw new Error(err);
}

export {};
