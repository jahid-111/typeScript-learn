enum SeatChoice {
    AISLE = 10,
    MIDDLE = 20,
    WINDOW = 30,
    NONE = 40
}


const jahidSeat = SeatChoice.AISLE;




// enum UserRole {
//     ADMIN = 'ADMIN',
//     GUEST = 'GUEST',
//     SUPER_ADMIN = 'SUPER_ADMIN',
//     IS_DEVELOPER = true,
// }

const UserRole = {
    ADMIN: 'ADMIN',
    GUEST: 'GUEST',
    SUPER_ADMIN: 'SUPER_ADMIN',
    IS_DEVELOPER: true,
    IS_PILOT: true,

} as const;

type UserRoleType = typeof UserRole[keyof typeof UserRole];
function getUserRole(roleUser: UserRoleType) {

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
const user = getUserRole(UserRole.IS_DEVELOPER);

console.log(user)
export { }