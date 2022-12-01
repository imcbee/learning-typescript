"use strict";
exports.__esModule = true;
function addTwo(num) {
    //! number defined prevents different data types in arguments
    //num.toUpperCase(); // I should not be able to do this, but any is there
    // this will take a number and add two
    return num + 2;
}
//addTwo("5"); // the problem is that num argument is an any
// a quoted number should not work, but it does
addTwo(5);
function getUpper(val) {
    return val.toUpperCase(); // this is letting do this again because of any
}
//getUpper(4); // this again should not work, so change argument to string instead of any
getUpper("Ian McBee");
function signUpUser(name, email, isPaid) { }
//signUpUser(1, 2, 3); // this won't work because arguments are defined to a type
signUpUser("Ian", "imcbee@awesome.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// how can I pass on default values
loginUser("Ian", "i@i.com"); // the boolean value will be default
