"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(number) {
    // number.toUpperCase() // This line will cause an error because `toUpperCase` is not a method of type `number`.
    return number + 10;
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
