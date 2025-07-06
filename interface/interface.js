"use strict";
// TypeScript Interface Example
// An interface is a way to define the structure of an object.
// It can be used to define the shape of an object, including its properties and methods.
// Interfaces are used to define the structure of an object, including its properties and methods.
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript Interface Example
// An interface is a way to define the structure of an object.
// It can be used to define the shape of an object, including its properties and methods.
// Interfaces are used to define the structure of an object, including its properties and methods.
var jahid = {
    db_Id: "121ceq",
    email: "jahidjob4@gmial.com",
    password: "email",
    role: "Admin",
    signinBy: "Google",
    startTrail: function () { return "Start Trail to Redirect"; },
    firstMonth: function () { return "First Month"; },
    getCoupon: function (name) {
        return 10;
    },
    github: function () {
        return "github.com/jahid-111";
    }
};
// jahid.age = 25; // This is allowed because age is optional
// jahid.db_Id = 123; // This is allowed because db_Id is not readonly in this case
console.log(jahid.startTrail());
