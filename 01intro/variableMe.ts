let greetings: string = "Hello Ian";

// greetings = true or 10 will not work properly

let myNum = 6;

//myNum.toUpperCase(); //! this cannot work

greetings.toLowerCase(); // if you misspell, TS can catch this error

console.log(greetings);

// ----------------------------------------------------------------
//? Number
// TS does not have floats or int, just numbers

let userId: number = 334455.3; // not the best annotation
//TS knows that it wants a number with methods that you can use with it

let userId1 = 334455.3; // best way to annotate
userId1.toFixed();

//? Boolean
let isLoggedIn: boolean = false;

//? Any
let hero: string; // what if you don't know what hero will become?
//this will become an "any" without declaration
//this will tell that the variable will become a type
// any will turn off the type-checking flag

function getHero() {
  return "Thor"; //if you change this to a boolean, hero will throw an error
}

hero = getHero();

export {};
