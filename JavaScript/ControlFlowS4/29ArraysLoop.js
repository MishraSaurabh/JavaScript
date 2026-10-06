// special loop on arrays:
// "for of" loop

const arr = [1, 2, 3, 4, 5] // array declaration

//  for (const element of object) {
                                    //structure of for of loop
//  }
for (const num of arr) {
    console.log(num)
    
}
// node ControlFlowS4/29ArraysLoop.js   => for running js file

//similarly for strings:
const greetings = "hello world"
for(const greet of greetings){
    console.log(`each charecter is ${greet}`);
}

//Maps:
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
// console.log(map);

//aaply loop on map
for(const [key, value] of map){
    console.log(key, ';-' , value)
}

//loops on object
// error: myObject is not iterable
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'Freefire'
}
for (const [key, value] of myObject) { //myObject is not iterable
    
}
// other method: "forIn loop";
const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'Freefire'
}
for (const key in myObject1) {
    console.log(myObject1[key]);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Higher order loop for Arrays: forEach loop

// ✅ USING forEach METHOD IN JAVASCRIPT

// 🔹 **Definition of Important Concepts:**
// 1️⃣ **forEach() Method:**
//    - `forEach()` is a higher-order array method in JavaScript that executes a provided function once for each array element.
//    - It doesn't return a new array, unlike `map()`. It just loops through the array.
//    - It takes a callback function as an argument and can access three parameters: `item`, `index`, and `array`.

// 2️⃣ **Arrow Functions:**
//    - Arrow functions provide a cleaner and more concise syntax for writing functions.
//    - They don't have their own `this` binding, unlike regular functions, which can be helpful in specific cases.

// 3️⃣ **Callback Functions:**
//    - A callback function is a function passed as an argument to another function, to be executed later.

// 🔹 Code Implementation:

// ✅ Example 1: Using forEach with a Regular Function
const coding = ["js", "ruby", "java", "python", "cpp"];

// Using an anonymous function with forEach
coding.forEach(function (val) {
    console.log(val);
});
// 🔹 **Output:**
// js
// ruby
// java
// python
// cpp

// ✅ Example 2: Using forEach with Arrow Function
coding.forEach((item) => {
    console.log(item);
});
// 🔹 **Output:**
// js
// ruby
// java
// python
// cpp

//Note: for each never return the value. it just itrate but not return.