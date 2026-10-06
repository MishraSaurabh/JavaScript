//Stack and heap memory in JS

//all primitive Datatpes takes memory in stack and all NOnprimitive datatypes takes memory in heap

//example: stack memory

let myName = "Saurabh Mishra"; // take memory in stack

let herName = myName; // pass a copy of the myname
herName = "Anamika Sharma"; // when we change the hername my name will not change, because its a copy shared.

console.log(myName);
console.log(herName);

//example: heap memory

let userOne = {
    name: "saurabh",
    age: 23
}

let userTwo = userOne;

userTwo.name = "Anamika"; // it changes the name in userOne and UserTwo both. becuse its stored in heap memory and in heap values are passes by references. 

console.log(userOne);
console.log(userTwo);