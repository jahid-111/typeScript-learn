"use strict";
console.log("Hello, TypeScript!");
console.log("Hello, TypeScript  again!");
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
        this.email = email;
        this.pass = pass;
        this.isSenior = isSenior;
    }
}
const developerInfo = new Developer("jahidjob5@outlook.com", 123, true);
