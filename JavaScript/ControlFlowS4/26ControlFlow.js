


//if : checking condtion if true then "if" code runs.
// const isUserloggedIn =true

// if(isUserloggedIn){

// }
// =: assigning, == : checking equals or not, === : checking with datatypes

const temp = 55;
if(temp < 50){
    console.log(`tem is less then 50 that is ${temp}`);
}else{
    console.log(`temp is more then 50, that is ${temp}`);
}

//another concept: using const, var, let
// const score = 200;
// if(score>100){
//     const power = "fly"  // if it const datatypes
//     console.log(`user power is: ${power}`); //user power is: fly
// }
// console.log(`user power is: ${power}`); //o/p: ReferenceError: power is not defined

const score = 200;
if(score>100){
    var power = "fly"  // if it const datatypes
    console.log(`user power is: ${power}`);// user power is: fly
}
console.log(`user power is: ${power}`); //o/p: user power is: fly
 /* Note: var is dataypes which allows vlaues to use outside the scope. 
 simply it makes a data global. which is not a good thing. 
 hence const and let not allow this thing*/


//implicit scope:
const balance = 5000
if(balance > 1000) console.log("test"),
console.log("test2");  // exectuted, but not good practice, without scopes "{}", implicit scope.


// more conditions.
//&&(and) : both true, ||(Or) : any one true 
 
const isUserloggedIn = true
const debitCard = true
const loggedInbyGoogle = false
const loggedInbyEmail = true

if(isUserloggedIn && debitCard){
    console.log("Allow to shoping");
}
if(loggedInbyEmail || loggedInbyGoogle){
    console.log(" USer loggedIn");
}


//switch: 
// breck: stop execution of code after match. if it not exist the code execution continue after match also, except default code.
const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;

        case 2:
        console.log("Feb");
        break;

        case 3:
        console.log("March");
        break;

    default:
        console.log("default case match")
        break;
}


//truthy and falsy values: 

// Falsy values: false, 0, -0, bigInt 0n, "", null, undefined, NaN
//Truthy values: True, "0", 'false', " ", [], {}, function(){},

const userEmail = "saurabh@123"
if(userEmail){
    console.log("got user email"); //o/p: got user email
    //although its not real email, but we asume that it is real or truthy value.
}else{
    console.log("Dont have user email");
}

//nullish coalescing operator (??): null undefined: avoid null vlaues.
let val1;
let val2;
let val3;

val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);

//Turnary operator (?)

const icePrice= 100;
icePrice <= 80 ? console.log("less then 80") : console.log("more then 80");