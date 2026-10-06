//scope: let,  const, var


var c= 300 // still o/p:30 // global scope or variable
if(true){
    let a=10
    const b=20
    var c=30 // block scope or variable
}
//console.log(a); // ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined
console.log(c); //o/p: 30 . why? due to scope 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//one more example:

if(true){
    const username = "Saurabh"
    if(username==="Saurabh"){
        const website = " Youtube"
        console.log(username + website); //o/p: Saurabh Youtube
    }
    // console.log(website) //ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not defined
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



 //Hoisting or hosting

//  function addone(num){
//     return num+1
//  }
//  console.log(addone(5)) // after execution it comes 6


 console.log(addone(5)) // still it gives 6
 function addone(num){
    return num+1
 }

 //but, when we keep the function in the variable then it gives error :

//  const addTwo = function(num){
//     return num + 2
//  }
//  addTwo(5) // no error. o/p: 7  but


 console.log(addTwo(5)) // now it will give error : 
 //ReferenceError: Cannot access 'addTwo' before initialization
 const addTwo = function(num){
    return num + 2
 }
  
  
