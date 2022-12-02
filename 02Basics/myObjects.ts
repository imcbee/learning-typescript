const User = {
  name: "Ian",
  email: "i@i.com",
  isActive: true,
};

//the use-case of an object is through a function
function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Ian", isPaid: false, email: "i@i.com" };

createUser(newUser);
//this is throwing an error because email is not available
//moving the arguments as variables can correct this

function createCourse(): { name: string; price: number } {
  // this syntax is saying that you will return an object type
  // you are defining specific returned types
  return { name: "react", price: 399 };
}

//! Type
type User = {
  // this is type alias: Users have properties that we want to use

  //mongodb property
  readonly _id: string; //prevents property from being overwritten or changed
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

function createUser1(user: User) {
  return { name: "", email: "", isActive: true };
}

//createUser1({ name: "", email: "", isActive: true });

// testing to is that id cannot be changed
let myUser1: User = {
  _id: "1234",
  name: "i",
  email: "i@i.com",
  isActive: false,
};

myUser1.email = "j@j.com";
//myUser1._id = "asa"; //error comes up saying this is read only
//? this will prevent the compiler making this in the JS file

type cardNumber = {
  cardNumber: string;
};

//what if you wanted to add card date or other information together in a type?
type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    //? this will combine everything together as a type
    //this is a good example of real world, but not good practice
    cvv: number;
  };

export {}; // you always need to export for TS
