// ✅ Object Literals and Properties

// 🔸 An object when declared with constructor → singleton.
// 🔸 An object when declared with literals → NOT singleton.

// 🔹 An object literal is a list of name:value pairs inside curly braces {}.
// 🔹 Objects are mutable: They are addressed by reference, not by value.

// In JavaScript, objects can be created in two main ways:
// 1. Using object literals → new unique object each time (not singleton)
// 2. Using constructors → can create a singleton pattern

// objects using literlas:
// let obj = {}// this is how we can define ojects.
let obj1 = {name: "jhon"};
let obj2 = {name: "jhon"};
console.log(obj1===obj2); // o/p: false, (two distict objects.)


// ✅ Define a Symbol for a unique property key
const mySym = Symbol("key1");

//definen objects using object literals notation
const JsUser = {
    name: "Saurabh",
    age: 23,
    location: "chandigarh",
    email: "imsaurabhx07@gmail.com",
    lastLoginday: ["monday", "saturda"],
    "full name": "Saurabh Mishra",
    [mySym]: "mykey1"
};
//accessing object properties:
console.log(JsUser.email);  //imsaurabhx07@gmail.com
//its not a good way. bcs it take the key and prints its value. 

// but in js keys are also concider as string in backend
//there is no any method that u can access the full anme by using (.) property.
//thts whay we need [" "] proprty.
console.log(JsUser["email"]); //imsaurabhx07@gmail.com
console.log(JsUser["full name"]);
// console.log(JsUser.full name); // wrong
console.log(JsUser[mySym]); // mykey1

//updating objects properties:
JsUser.email = "Anna@123.com";
console.log(JsUser.email);

// //freezing the object to prevent modification:
// Object.freeze(JsUser); // no one can change anything in this objetc.

// ✅ Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); //with the name form current object
};

// Calling the methods
console.log(JsUser.greeting());     // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Saurabh


// ✅ Important Notes:
// - Object literals: Every {} creates a new object (not singleton).
// - Using Symbols as property keys ensures uniqueness and avoids collisions.
// - Object.freeze(obj) makes the object immutable.
// - Adding methods helps encapsulate behavior inside the object.
// - Use `this` in methods to access the current object’s properties.







