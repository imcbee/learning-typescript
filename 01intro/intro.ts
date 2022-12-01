let user = {
  name: "Ian McBee",
  age: 10,
};

console.log("Ian McBee");
console.log(user.name); // this will not work in production
// what is happening is that the TS will create a JS

//console.log(user.email); // you will get an error because it doesn't exist
