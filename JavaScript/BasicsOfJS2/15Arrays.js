//more functions of array

const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //not giivng in appropriate way.
// console.log(marvel_heros); //o/p: [ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]

//concatinate
const allHeros = marvel_heros.concat(dc_heros); // it gives the approprite output as shown.
console.log(allHeros); //o/p: [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

//also using spread
const all_new_heros = [...marvel_heros, ...dc_heros]; // used for add two or more arrays.
console.log(all_new_heros); //o/p: [ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

//flat: Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //array under arrray
 let real_another_array = another_array.flat(Infinity); // flat all array (default)
//   let real_another_array = another_array.flat(4);// the no. of  array that have to flat
 console.log(real_another_array); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// Check if a value is an array
console.log(Array.isArray("Hitesh"));    // Outputs: false (since "Hitesh" is a string)
console.log(Array.from("Hitesh"));       // Converts a string to an array of characters: [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})); // Interesting case: Outputs an empty array since the object is not iterable

// Create an array from individual  scores
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Outputs: [100, 200, 300]


/**************some important operations****************************************************************/

// ✅ 1. Reverse an Array
let arr = [10, 20, 30, 40];

arr.reverse(); // Modifies the original array
console.log("Reversed:", arr); // [40, 30, 20, 10]


// ✅ 2. Sort an Array (Ascending / Descending)

// 🔹 Default Sort (Lexicographic / ASCII based)
let nums = [5, 100, 20];
nums.sort();
console.log("Default sort:", nums); // [100, 20, 5] — ❌ incorrect for numbers

// 🔹 Proper Numeric Sort (Ascending)
let numsAsc = [5, 100, 20];
numsAsc.sort((a, b) => a - b); // ascending
console.log("Ascending:", numsAsc); // [5, 20, 100]

// 🔹 Numeric Sort (Descending)
let numsDesc = [5, 100, 20];
numsDesc.sort((a, b) => b - a); // descending
console.log("Descending:", numsDesc); // [100, 20, 5]


// 🔁 Combined Example: Sort ascending then reverse
let mixArr = [4, 1, 7, 3];

// Sort ascending
mixArr.sort((a, b) => a - b); // [1, 3, 4, 7]

// Reverse the sorted array
mixArr.reverse();             // [7, 4, 3, 1]

console.log("Sorted then reversed:", mixArr);

