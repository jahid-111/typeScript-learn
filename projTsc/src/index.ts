
console.log("Hello, TypeScript!");
console.log("Hello, TypeScript  again!");

//// TypeScript Classes and Access Modifiers
// get and set Access Modifiers: public, private, protected


class User {
    readonly email: string;
    name: string;
    pass: number;
    city: string = "";
    constructor(email: string, name: string, pass: number) {
        this.email = email;
        this.name = name;
        this.pass = pass;
    }
}


const jahid = new User("jahidjob4@gmail.com", "Jahid", 1234);
jahid.city = "Dhaka";
jahid.email




class Developer {

    isSenior: boolean
    private couseCount = 1
    constructor(
        public email: string,
        private pass: number,
        isSenior: boolean
    ) {
        this.email = email;
        this.pass = pass;
        this.isSenior = isSenior;
    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get courseCount(): number {
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

