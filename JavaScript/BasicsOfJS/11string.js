// Strings:
const name = "Saurabh";
const secName = "Mishra";

//console.log(name + secName); // but this is not a appropriate method to add. no one use it now a dayas.

//new and modern method that we use for adding:

console.log(`${name} ${secName}`); // remeber; it only wroks inside the templates literals i.e. (` `)
//also
console.log(`hello my firstname is ${name} and my sound name is ${secName}`);

//string indexing;

let firstName = "Anamika";
// A  n  a  m  i  k  a
// 0  1  2  3  4  5  6

// console.log(firstName[0]);
// length of string 
// firstName.length 

//console.log(firstName.length);

//console.log(firstName[firstName.length-2]);


//another methods in strings:
//const gameName = "Saurabh-ku-Mishra"; this is the also way can string defined. object called  Bydefault.
const gameName = new String('Saurabh-ku-mishra'); // this defination of string with object

// now access the charecters and properties of string object;
console.log(gameName[0]); //output: 'S' 
console.log(gameName.__proto__); //output: {} string prototype object

console.log(gameName.length); //output: 12

console.log(gameName.toUpperCase()); //output: SAURABH-KU-MISHRA


// Getting the character at a specific index
console.log(gameName.charAt(2));    // Outputs: 'u'

// Finding the index of the first occurrence of a character
console.log(gameName.indexOf('h')); // Outputs: 5

// Extracting a substring from the string
const newString = gameName.substring(0, 4); // last value not include, if give -ve value it start from 0;
console.log(newString); // output: Saur

// Using slice with negative index
const anotherString = gameName.slice(-4, 4); //START INDEX,END INDEX , EXCLUDE END INDEX
console.log(anotherString);         // Outputs: '' (incorrect usage)

//removine whiteSpace from strings:
const nameString = "   Saurabh   ";
console.log(nameString); // output: '   Saurabh   '
console.log(nameString.trim()); //output: 'Saurabh' | there is more functions like trim start and trim end.


// Replacing a substring within a string
const url = "https://saurabh.idspace/mishra%20linkedin";
console.log(url.replace('%20', '-')); // output: https://saurabh.idspace/mishra-linkedin

// Checking if a substring is present within the string
console.log(url.includes('sunder')); //false: because substrins not in the url
console.log(url.includes('linkedin')); // true

// Splitting a string into an array using a delimiter
console.log(gameName.split('-'));     // Outputs: ['Saurabh', 'ku', 'msihra']



