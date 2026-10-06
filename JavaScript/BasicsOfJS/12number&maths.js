//we'll learn about the properties of numbers and some mathematics terms in js

const score = 400;
console.log(score);  // o/p: 400

//also can be 
const balance = new Number(100);
console.log(balance);  // specificically an number o/p: [Number: 100]


//typecasting
//console.log(balance.toString()); // o/p: 100
//console.log(typeof(balance)); // o/p:  object , which is a string. it changes to string.
//console.log(balance.toString().length);

//fixing decimals;
console.log(balance.toFixed(2)) // o/p: 100.00 , fixed the number to 2 decimal values.

//precision values:
const otherNumber = 123.876;
console.log(otherNumber.toPrecision(4))// it precise the values to the 4th digit. o/p: 123.9

//local string:
const localNumber = 1000000;
console.log(localNumber.toLocaleString()); // o/p: 10,00,000 , acc to US satnd. 
console.log(localNumber.toLocaleString('en-IN')); // o/p: same for this numb. but it gives on Indian Std.

//+++++++++++++++++++++++++++++ maths +++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //o/p: Object [Math] {}

// console.log(Math.abs(-4)); //give absolute value: o/p: 4
// console.log(Math.round(4.6)); // o/p: 5

// console.log(Math.ceil(4.2)); // it always rroundoff with upper value. o/p: 5
// console.log(Math.floor(4.9)); //it always roundoff with lower value. o/p: 4

// console.log(Math.sqrt(25)); //o/p: 5
// console.log(Math.min(2,6,1,5,3)); // 1
// console.log(Math.max(2,6,1,5,3)); // 6


console.log(Math.random()); // it gives the values between 0 to 1 
console.log((Math.random()*10) + 1); // avoid 0 case: it gives values btw 1 to 9 but more then 1. because we added 1.

//now defining min and max range for the random.

 const min = 10;
 const max = 20;


 console.log((Math.random() * (max - min + 1)) + min); // it gives the values betw 10 to 20 but in very decimal form. o/p: 18.65611145155856
  console.log(Math.floor((Math.random() * (max - min + 1)) + min));  // it gives the absolute values btw 10 and 20. o/p: 15







