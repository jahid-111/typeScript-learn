

function sum(number: number): number {
    // number.toUpperCase() // This line will cause an error because `toUpperCase` is not a method of type `number`.
    return number + 10;
    // return "hello"; // This line will cause an error because the return type is declared as `number`, but we are returning a string.
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



// ----------  ISSUE FOR UNION TYPE ---------------

// function getValue(myVal: number)  : string{
/* function getValue(myVal: number)  : boolean{

    if (myVal > 5) {
        return true;
    }
    return "status: 200"
}
 */



// Return Type 
const getHello = (greet: string): string => {
    return `Hello ${greet}`;
}



const hero = ["Mohammad", "Jahid", "Islam"]


hero.map((name): string => {
    return `Hello ${name}`;
})



// Use Void To know more definition this Function
function consoleError(errMsg: string): void {
    console.error(errMsg);
}

// Use Never , with function never returns a value
function handleError(errMsg: string): never {
    throw new Error(errMsg);
}



export { }; 