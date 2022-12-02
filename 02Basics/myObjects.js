"use strict";
exports.__esModule = true;
var User = {
    name: "Ian",
    email: "i@i.com",
    isActive: true
};
//the use-case of an object is through a function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Ian", isPaid: false, email: "i@i.com" };
createUser(newUser);
//this is throwing an error because email is not available
//moving the arguments as variables can correct this
function createCourse() {
    // this syntax is saying that you will return an object type
    // you are defining specific returned types
    return { name: "react", price: 399 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
//createUser1({ name: "", email: "", isActive: true });
// testing to is that id cannot be changed
var myUser1 = {
    _id: "1234",
    name: "i",
    email: "i@i.com",
    isActive: false
};
myUser1.email = "j@j.com";
