//Arrays allows stroing a a collection of multiple values under a single varibale name.
//They are resizable(size is not fixed in js), zero indexed and can hold mix different data types(number, string, etc.).
//Arrays  are special type of object in JS. 

const myarr = [0,1,2,3,4,5];
const myArr = [0,1,2,3,4,5, "Saurabh", true]; //it is also write.

console.log(myArr[1]); // o/p: 1

//Arrays method
myArr.push(6);
console.log(myArr); //o/p: [0,1,2,3,4,5,6]

myArr.pop();
console.log(myArr); //o/p: [0,1,2,3,4,5]

myArr.unshift(0); /*it add the giben vlaue in the front of the array. 
and change the index of all the element by +1. which is not good for
 Time complexity. it make a impact on computer. so avoid it to use*/ 
console.log(myArr); // o/p: [0,0,1,2,3,4,5] but not optimise.
myArr.shift();// it remves the first element(0th) from the array.
console.log(myArr); // o/p: [ 0, 1, 2, 3, 4, 5 ].


//Join:  change the array into string;

const newArray = myArr.join();

console.log(myArr); //o/p: [ 0, 1, 2, 3, 4, 5 ], As array
console.log(newArray);//o/p: 0,1,2,3,4,5, As string.
console.log(typeof newArray); // string


//slice and splice


//slice
console.log("A ", myArr);// o/p: A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 4); //ptint elemt from index 1 to 3 (exclude 4th elemt)
console.log(myn1);//o/p: [ 1, 2, 3 ]
console.log("B ", myArr);//o/p: B  [ 0, 1, 2, 3, 4, 5 ], after slice operation array remains same.

//splice
/*it loock like that it include the both index as o/p is [ 1, 2, 3, 4 ]
but it not exactly that. actually is changes the original Array. as
you see in the output of myArray. it only remains [0, 5 ],  
*/
const myn2 = myArr.splice(1, 4);
console.log(myn2); // o/p:  [ 1, 2, 3, 4 ]
console.log(myArr); // o/p: [0, 5]

//diff betwn slice and splice:
//slice: exclude the upper value and do not change the array.
//splice: include the both value but it change the orihinal array.








