// ✅ JavaScript Execution Context: How JS Executes Code  

// 🔹 JavaScript runs in **two phases**:
// 1️⃣ **Memory Creation Phase** – JS allocates memory for variables and functions.  
// 2️⃣ **Execution Phase** – JS executes the code and assigns values to variables.  

// 🔹 JavaScript is **single-threaded**, meaning it executes one task at a time (in a sequence).  
// 🔹 Everything in JS runs inside an **Execution Context**.

// ---------------------------------------------

// ✅ **Types of Execution Contexts in JS:**
// 1️⃣ **Global Execution Context (GEC)** – Created when the JS file is first run.  
//    - It is referred to by `this` and is the **window object** in the browser.  
// 2️⃣ **Function Execution Context (FEC)** – Created each time a function is called.  
// 3️⃣ **Eval Execution Context** – Created when code inside `eval()` is run (rarely used).

// ---------------------------------------------

// ✅ **How JavaScript Executes Code (Two Phases)**

// 🔹 **Step 1: Global Execution Context is Created**  
// The first thing JS does is create the **Global Execution Context (GEC)**, which contains:  
// - `this` (refers to the window object in browsers)  
// - Global variables and functions

// 🔹 **Step 2: Memory Creation Phase**  
// In this phase, memory is allocated for variables and functions.  
// Variables are initially set to `undefined`.  
// Functions are stored as their entire function definition.

let val1 = 6;
let val2 = 7;

function addnum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addnum(val1, val2);  // Function call 1
let result2 = addnum(4, 6);        // Function call 2

// ---------------------------------------------

// ✅ **Global Execution Context Steps:**

/*
📝 **Memory Creation Phase (Global Execution Context):**
val1 -> undefined
val2 -> undefined
addnum -> [Function Definition]
result1 -> undefined
result2 -> undefined
*/

/*
📝 **Execution Phase (Global Execution Context):**
val1 -> 6
val2 -> 7
addnum -> [Function Definition]
result1 -> (addnum execution starts)
result2 -> (addnum execution starts)
*/

// ---------------------------------------------

// ✅ **Function Execution Context Creation for `addnum()`:**
// Each time a function is called, a **new execution context** is created for that function.
// It has **two phases**:  
// 1️⃣ **Memory Creation Phase**  
// 2️⃣ **Execution Phase**  

/*
📝 **Memory Phase for addnum():**
num1 -> undefined
num2 -> undefined
total -> undefined
*/

/*
📝 **Execution Phase for addnum():**
num1 -> 6
num2 -> 7
total -> 13
🔄 The value of `total` (13) is returned to the global execution context.
*/

// ✅ After returning the result, the **function execution context is removed from the call stack**.

// ---------------------------------------------

// ✅ **What is the Call Stack?**

// The **call stack** is a mechanism that keeps track of the function calls in JS.  
// It follows the **LIFO (Last In, First Out)** principle:  
// - The last function added to the stack is the first one to be removed.

// 📚 **Example of Call Stack:**
// 1️⃣ Global Execution Context is added to the stack.  
// 2️⃣ `addnum()` is called, so a new function execution context is created and added to the stack.  
// 3️⃣ After `addnum()` finishes, it is removed from the stack.  
// 4️⃣ The process repeats for each function call.

// 📝 **Call Stack Example:**
/*
[{}]  <-- Global Execution Context (GEC)
[addnum()]  <-- Function Execution Context for addnum()
[{}]  <-- GEC remains after addnum() finishes
*/

// ✅ Summary:
// - JS executes code in two phases: Memory Phase and Execution Phase.  
// - Execution contexts are created for global code and each function call.  
// - The call stack keeps track of function calls using LIFO (Last In, First Out).  