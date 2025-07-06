"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myScore = 33;
myScore = "33"; // This is valid
myScore = true; // This is also valid
myScore = 33; // This is also valid
var newUser = { id: 1234, name: "John" };
newUser = { userName: 1234, role: "Admin" }; // This is valid
function getDbId(dbId) {
    return dbId;
}
function getDbId2(dbId) {
    var result;
    if (typeof dbId === "string") {
        return result = dbId.toLowerCase(); // This will return a string
    }
    return dbId; // This will cause an error if type checking is enabled
}
console.log(getDbId2("1234"));
getDbId("1234"); // This is valid
var data = [1, 2, 3, 4, 5];
var data2 = ["1", "2", "3", "4", "5"];
var data3 = [1, 2, 3, 4, 5];
// This is valid because it can contain numbers, strings, and booleans 
// not to do (its not a good practice to use union types in arrays, but it is valid)
console.log(data3);
var pi = 3.14; // This is valid
// pi = 3.144; // This is also valid
var developerName;
developerName = "jahid"; // This will cause an error if type checking is enabled
