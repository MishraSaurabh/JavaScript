//functions: block of codes that perform a perticuler task.

//declaration
function sayMyName(){
    console.log("Saurabh");
}
sayMyName(); //o/p: "Saurabh";

// more examples:
function addTwoNumbers(number1, number2){
    number1+number2;
}
addTwoNumbers(4, 5);
console.log(addTwoNumbers());  //NaN

function addTwoNumbers(number1, number2){
       return number1+number2; // no statement will run after return statement
}
const result1 = addTwoNumbers(4, 6);//during function declaration are parameters
console.log(result1);

// Function Expression Example
const subtractTwoNumbers = function(number1, number2) {
    return number1 - number2;
}
const resultSubtraction = subtractTwoNumbers(10, 5);
console.log("Subtraction Result: ", resultSubtraction);
// Output: Subtraction Result: 5

// Function with Default Parameters
 // if no parameters provide then  sam used. even no default parameter provided then undefined printed at username
function loginUserMessage(username = "sam") { //undefined when no values provided.    undefined+undefined=NaN
    if (!username) { // also can if( usrname === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
// Output: sam just logged in

console.log(loginUserMessage("Rahul"));
// Output: Rahul just logged in







