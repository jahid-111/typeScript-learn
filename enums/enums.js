"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 20] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 30] = "WINDOW";
    SeatChoice[SeatChoice["NONE"] = 40] = "NONE";
})(SeatChoice || (SeatChoice = {}));
var jahidSeat = SeatChoice.AISLE;
// enum UserRole {
//     ADMIN = 'ADMIN',
//     GUEST = 'GUEST',
//     SUPER_ADMIN = 'SUPER_ADMIN',
//     IS_DEVELOPER = true,
// }
var UserRole = {
    ADMIN: 'ADMIN',
    GUEST: 'GUEST',
    SUPER_ADMIN: 'SUPER_ADMIN',
    IS_DEVELOPER: true,
    IS_PILOT: true,
};
function getUserRole(roleUser) {
    switch (roleUser) {
        case UserRole.ADMIN:
            console.log('User is an Admin');
            break;
        case UserRole.GUEST:
            console.log('User is a Guest');
            break;
        case UserRole.SUPER_ADMIN:
            console.log('User is a Super Admin');
            break;
        case UserRole.IS_DEVELOPER:
            console.log('User is a Developer');
            break;
        case UserRole.IS_PILOT:
            console.log('User is a Pilot');
            break;
        default:
            console.log('Unknown role');
    }
}
var user = getUserRole(UserRole.IS_DEVELOPER);
console.log(user);
