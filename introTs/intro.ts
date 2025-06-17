let user = { name: "Jahid", age: 10 };
console.log("Hello, TypeScript!");
console.log(user.email); // This will cause an error because 'email' does not exist on type 'user'
// To fix the error, we can define the type of 'user' more explicitly