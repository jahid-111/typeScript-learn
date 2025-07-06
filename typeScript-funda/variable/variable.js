"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello, TypeScript!";
greeting.toLocaleLowerCase();
console.log(greeting);
// Number variable
var number = 10e231;
number.toExponential(2);
console.log(number);
// Boolean variable
var isLoggedIn = false;
console.log(isLoggedIn);
var hero;
//Avoid using 'any' type in production code, it's used here for demonstration purposes.
// Function that returns a string
function getHero() {
    return "False";
}
hero = getHero();
console.log(hero);
