let greeting: string = "Hello, TypeScript!";


greeting.toLocaleLowerCase();
console.log(greeting);


// Number variable
let number: number = 10e231;

number.toExponential(2);
console.log(number);

// Boolean variable
let isLoggedIn: boolean = false;
console.log(isLoggedIn);




let hero: any;
//Avoid using 'any' type in production code, it's used here for demonstration purposes.
// Function that returns a string

function getHero() {
    return "False";
}

hero = getHero();

console.log(hero);
export { };
