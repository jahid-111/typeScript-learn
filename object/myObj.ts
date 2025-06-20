

const user = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
}


function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: "jahid", isPaid: true });




// function getUser(): { Type of Data's } {}
function getUser(): { name: string, email: string, age: number } {
    return { name: "Jahid", email: "jahidjob4@gmail.com", age: 10 };
}





type User = {
    name: string;
    email: string;
    age: number;
    isActive?: boolean;
}

function createUser2(user: User): User {
    return user;
}

createUser2({ name: "", email: "", age: 0, isActive: true });




export { };