"use strict";
console.log("Hello, TypeScript!");
console.log("Hello, TypeScript  again!");
//// TypeScript Classes and Access Modifiers
// get and set Access Modifiers: public, private, protected
class User {
    constructor(email, name, pass) {
        this.city = "";
        this.email = email;
        this.name = name;
        this.pass = pass;
    }
}
const jahid = new User("jahidjob4@gmail.com", "Jahid", 1234);
jahid.city = "Dhaka";
jahid.email;
class Developer {
    constructor(email, pass, isSenior) {
        this.email = email;
        this.pass = pass;
        this.couseCount = 1;
        this.email = email;
        this.pass = pass;
        this.isSenior = isSenior;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get courseCount() {
        return this.courseCount;
    }
    // no return type is needed for setter
    set courseCount(value) {
        if (value <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this.courseCount = value;
    }
}
const developerInfo = new Developer("jahidjob5@outlook.com", 123, true);
developerInfo.courseCount = 2; // Setting course count
// developerInfo.deleteToken() // Error: Property 'deleteToken' is private and only accessible within class 'Developer'.
