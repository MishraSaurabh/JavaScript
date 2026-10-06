//IIFE: Immediately Invoked Function Expression :  is a JavaScript programming pattern where a function runs automatically as soon as it is defined.
/*another defination: Avoid Global Scope Pollution: Variables declared 
inside an IIFE exist only within its local lexical scope. They cannot leak out 
into the global scope or accidentally overwrite other variables*/

//NOrmal function which needs to call.
// function chai(){
//     console.log(`DB connected`);
// }
// chai(); //o/p: DB Connected

//IIFE function
//Named IIFE
(function chai(){
    console.log(`DB connected`);
})(); // => "()" this is a immediate calling       //o/p: DB connected

// another method
//unnamed IIFE
(() => {  //making/ defining function, using arrow operator is must.
    console.log(`DB Connected 2`)
})() // function automatically calling.