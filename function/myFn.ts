

function sum(number: number) {
    // number.toUpperCase() // This line will cause an error because `toUpperCase` is not a method of type `number`.
    return number + 10;
}

sum(5)


function getUpper(str: string) {
    return str.toUpperCase
}

getUpper("Hello World");


// REGULAR FUNCTION TS INPUT
function signupUser(name: string, email: string, password: number, isLoggedIn: boolean) {

    return `User ${name} signed up with email ${email} and password: ${password}}`;

}

signupUser("Jahid", "jahidjob4@gmail.com", 12345678, false)


// ARROW FUNCTION TS INPUT


const isLoginUser = (name: string, email: string, password: number, isPaid: boolean = false) => {
    return `User ${name} logged in with email ${email} and password: ${password}, isPaid: ${isPaid}`;
}


isLoginUser("jahid", "jahidjob4@gmail.com", 12345678)

export { }; 