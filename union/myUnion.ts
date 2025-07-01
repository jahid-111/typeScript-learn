

let myScore: number | string | boolean = 33;

myScore = "33"; // This is valid
myScore = true; // This is also valid
myScore = 33; // This is also valid
// myScore = []; // This will cause an error if type checking is enabled


type User = {
    id: number;
    name: string
}


type Admin = {
    userName: number;
    role: string
}

let newUser: User | Admin = { id: 1234, name: "John" };

newUser = { userName: 1234, role: "Admin" }; // This is valid





type dbIdTypo = string | number;

function getDbId(dbId: dbIdTypo): dbIdTypo {
    return dbId

}
function getDbId2(dbId: dbIdTypo): dbIdTypo {
    let result: dbIdTypo;
    if (typeof dbId === "string") {
        return result = dbId.toLowerCase() // This will return a string
    }
    return dbId // This will cause an error if type checking is enabled

}

console.log(getDbId2("1234"))
getDbId("1234"); // This is valid



const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];


const data3: (string | number | boolean)[] = [1, 2, 3, 4, 5];
// This is valid because it can contain numbers, strings, and booleans 
// not to do (its not a good practice to use union types in arrays, but it is valid)


console.log(data3);


let pi: 3.14 = 3.14; // This is valid

// pi = 3.144; // This is also valid

let developerName: "Mohd Jahidul Islam" | "Front-end web developer" | "job seeker"
developerName = "jahid" // This will cause an error if type checking is enabled



// tsc runtime Error
export { }