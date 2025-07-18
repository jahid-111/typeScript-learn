// TypeScript Interface Example
// An interface is a way to define the structure of an object.
// It can be used to define the shape of an object, including its properties and methods.
// Interfaces are used to define the structure of an object, including its properties and methods.



interface User {
    readonly db_Id: string | number;
    email: string;
    password: string;
    name?: string;
    age?: number;
    signinBy: string;
    startTrail: () => string
    firstMonth(): string;
    getCoupon(couponName: string): number;

}
interface Admin extends User {
    role: "Admin" | "User" | "SuperAdmin";
}

interface User {
    github: () => string;
    githubId?: string;
}


// TypeScript Interface Example
// An interface is a way to define the structure of an object.
// It can be used to define the shape of an object, including its properties and methods.
// Interfaces are used to define the structure of an object, including its properties and methods.


const jahid: Admin | User = {
    db_Id: "121ceq",
    email: "jahidjob4@gmial.com",
    password: "email",
    role: "Admin",
    signinBy: "Google",
    startTrail: () => { return "Start Trail to Redirect" },
    firstMonth: () => { return "First Month" },
    getCoupon: (name: "jahid10") => {
        return 10;
    },
    github: () => {
        return "github.com/jahid-111";
    }
};






// jahid.age = 25; // This is allowed because age is optional

// jahid.db_Id = 123; // This is allowed because db_Id is not readonly in this case

console.log(jahid.startTrail());
export { }