

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



type Book = {
    readonly _id: string; // readonly means it cannot be changed after initialization (MongoDB _id)
    // _id: string; // If you want to allow changes, remove readonly
    title: string;
    year: number;
    author: string;
    isPublished: boolean;
    genres: string[];
    creditCard?: number
}

let books: Book = {
    _id: "1",
    title: "The Great Gatsby",
    year: 1923,
    author: "F. Scott Fitzgerald",
    isPublished: true,
    genres: ["Fiction", "Classic"]
}


books.title = "The Great Gatsby Updated";
books.year = 1926;
// books._id = "2"; // This will cause an error because _id is readonly

function createBook(book: Book): Book {
    return book;
}


export { };