"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "jahid", isPaid: true });
// function getUser(): { Type of Data's } {}
function getUser() {
    return { name: "Jahid", email: "jahidjob4@gmail.com", age: 10 };
}
function createUser2(user) {
    return user;
}
createUser2({ name: "", email: "", age: 0, isActive: true });
