"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jahid = {
    db_Id: "121ceq",
    email: "jahidjob4@gmial.com",
    password: "email",
    signinBy: "Google",
    startTrail: function () { return "Start Trail to Redirect"; },
    firstMonth: function () { return "First Month"; },
    getCoupon: function (name) {
        return 10;
    }
};
// jahid.age = 25; // This is allowed because age is optional
// jahid.db_Id = 123; // This is allowed because db_Id is not readonly in this case
console.log(jahid.startTrail());
