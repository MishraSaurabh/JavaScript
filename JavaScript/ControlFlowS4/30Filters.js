// An array of programming languages
// The 'forEach' method iterates over each item in the array but doesn't return anything
// If you try to return a value from 'forEach', it will be ignored.
const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // The return value here does not get saved or affect the output of 'forEach'
//     return item // This return is ignored
// } )
// console.log(values); // 'values' will be undefined because 'forEach' doesn't return anything

// The 'filter' method creates a new array with all elements that pass the condition specified in the callback function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using 'filter' to create a new array of numbers greater than 4
const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums); // Output: [5, 6, 7, 8, 9, 10] 
//  can write const newNums = myNums.filter((num) =>  num > 4
//) writing condition directly but when we 
 

// The 'forEach' method executes a provided function once for each array element but does not return a new array.
// Using 'forEach' to push numbers greater than 4 into 'newNums'
const newNums2 = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

console.log(newNums2); // Output: [5, 6, 7, 8, 9, 10]