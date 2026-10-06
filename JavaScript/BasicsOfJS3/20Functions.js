//functions:

function calculateCartPrice(num1){
    return num1
}

// console.log(calculateCartPrice(200)); //o/o: 200
console.log(calculateCartPrice(200, 400, 600)) // o/p: 200

//But if we want to add more numbers in cart so: we use rest operator.
function calculateCartPrice2(...num2){ // ...num2 in thia "..." this is rest operator
    return num2
}

console.log(calculateCartPrice2(200, 400, 600)) //o/p: [ 200, 400, 600 ], an array.



//handle object in function:
const user = {  //object creation
    username: "saurabh", 
    price: 199
}

function handleObject(anyobject){
    console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

//handle array in function
const myNewArray = [200, 400, 100, 600] //Array

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); //o/p: 400
