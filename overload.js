"use strict";
function userLogin(email, password) {
    return `The user email is ${email} and password is ${password}.`;
}
// the above function will take user email and password or it can be executed with only user 
// email as listed below
console.log(userLogin("amjad@abc.com", "abc123"));
console.log(userLogin("amjad@123.com"));
