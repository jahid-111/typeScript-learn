const user: (string | number)[] = [1, "jahid"]

let user2: [string, number, boolean, object, []]

user2 = ["jahid", 1, true, {}, []] // Order matters in tuples


/* 
    * Tuples are a special type of array that can hold a fixed number of elements,
    * where each element can be of a different type.
    * They are defined using square brackets [] and can contain a mix of types.
    * Tuples are useful when you want to group related values together like API call,
    * for example, a user's name, age, and active status.
    * They are often used in function return types or when you want to enforce a specific structure for an array.
    * Example:
    const user: [string, number, boolean] = ["jahid", 30, true];
    * In this example, the tuple `user` contains a string (name), a number (age), and a boolean (active status).
// Tuples are fixed in length and order matters, so you cannot change the type or order of elements after declaration.

*/



let rgb: [number, number, number] = [255, 0, 0]; // RGB color representation

export { }