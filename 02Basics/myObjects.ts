const User = {
  name: "Ian",
  email: "i@i.com",
  isActive: true,
};

//the use-case of an object is through a function
function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Ian", isPaid: false, email: "i@i.com" };

createUser();
//this is throwing an error because email is not available

function createCourse(): { name: string; price: number } {
  // this syntax is saying that you will return an object type
  // you are defining specific returned types
  return { name: "react", price: 399 };
}

export {}; // you always need to export for TS
