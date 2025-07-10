
console.log("Hello, TypeScript!");
console.log("Hello, TypeScript  again!");


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

    constructor(
        public email: string,
        private pass: number,
        isSenior: boolean
    ) {
        this.email = email;
        this.pass = pass;
        this.isSenior = isSenior;
    }
}


const developerInfo = new Developer("jahidjob5@outlook.com", 123, true);