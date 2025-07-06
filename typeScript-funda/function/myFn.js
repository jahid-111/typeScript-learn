"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(number) {
    // number.toUpperCase() // This line will cause an error because `toUpperCase` is not a method of type `number`.
    return number + 10;
    // return "hello"; // This line will cause an error because the return type is declared as `number`, but we are returning a string.
}
sum(5);
function getUpper(str) {
    return str.toUpperCase;
}
getUpper("Hello World");
// REGULAR FUNCTION TS INPUT
function signupUser(name, email, password, isLoggedIn) {
    return "User ".concat(name, " signed up with email ").concat(email, " and password: ").concat(password, "}");
}
signupUser("Jahid", "jahidjob4@gmail.com", 12345678, false);
// ARROW FUNCTION TS INPUT
var isLoginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "User ".concat(name, " logged in with email ").concat(email, " and password: ").concat(password, ", isPaid: ").concat(isPaid);
};
isLoginUser("jahid", "jahidjob4@gmail.com", 12345678);
// ----------  ISSUE FOR UNION TYPE ---------------
// function getValue(myVal: number)  : string{
/* function getValue(myVal: number)  : boolean{

    if (myVal > 5) {
        return true;
    }
    return "status: 200"
}
 */
// Return Type 
var getHello = function (greet) {
    return "Hello ".concat(greet);
};
var hero = ["Mohammad", "Jahid", "Islam"];
hero.map(function (name) {
    return "Hello ".concat(name);
});
// Use Void To know more definition this Function
function consoleError(errMsg) {
    console.error(errMsg);
}
// Use Never , with function never returns a value
function handleError(errMsg) {
    throw new Error(errMsg);
}
