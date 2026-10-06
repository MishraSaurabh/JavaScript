"use strict"; // it means treats all js code  as newer version.

//variable declaration

let name = "saurabh"; // string
let age = 18; //number
let isLoggedIn = true; // boolean
let state; //undefined, no value assign

/*notes:
 primitive datatypes:

 1. number => represent both integer and float upto 2^53
 2. bigint => represent integer value longer then 2^53 - 1
 3. string => textual data in (" ", ' ', ` `)
 4. null => A stand alone value, it's output typeof is 'object'. represents the intentional absence of any object.
 5. undefined => represents variable that has beem delceared but not assingned.
 6. Symbol => represent a unique identifier. introduced in ES6 version

*/

//TypeOf:
console.log(typeof undefined); //output : undefined
console.log(typeof null); // output: object (this is historical Quric in JS)
console.log(typeof NaN); // output: number )but its not a number)


//from video 9 : Summery on Datatypes:
/*
*primitive datatypes:

7 types: Number, String, Boolean, BigInt, null, undefined, sybmol

* Referential (Non primitive): 
Array, object, function
*/

let score = 100; //number
let NewName = "Saurabh"; //string
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);


//non prmitive examples:

let heros = ["Shaktiman", "Naagraj", "doga"]; // arrays defined


//objects are alwayas in currly brases:
let Myobj = {
    name: "Saurabh",
    age: 22,

}


//storing function in a variable:
let Myfun = function(){
    console.log("hello world");
}


// if we check tupeof of all the non primitive DT so er get "functions" as output and for functions we get "object functions"




