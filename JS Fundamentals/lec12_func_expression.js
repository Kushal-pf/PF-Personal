// In JavaScript, a function is not a “magical language structure”, but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert( "Hello" );
}
// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:

let sayHi = function() {
  alert( "Hello" );
};

// Function is a value
// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

// We can even print out that value using alert:

function sayHi() {
  alert( "Hello" );
}

console.log( sayHi )

// The function is the value. The sayHi() is a variable holding the function.


// Why is there a semicolon at the end?
// You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not:

function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
// The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

// The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

// The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment.



// ********* Callback functions *********

// Functions are values. They can be assigned, copied or declared in any place of the code.
// Let’s look at more examples of passing functions as values and using function expressions.

// We’ll write a function ask(question, yes, no) with three parameters:

// question
// Text of the question
// yes
// Function to run if the answer is “Yes”
// no
// Function to run if the answer is “No”
// The function should ask the question and, depending on the user’s answer, call yes() or no():


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);


//   The arguments showOk and showCancel of ask are called callback functions or just callbacks.



//   Here, the code is a bit more complex than before. The function ask takes three arguments: question, yes and no. These are parameters. The first one is a string, and the other two are functions.


// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

// We can pass it between variables and run when we want.

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =:

// Function Expression
let sum = function(a, b) {
  return a + b;
};

// A Function Declaration can be called earlier than it is defined.

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

// The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

// f it were a Function Expression, then it wouldn’t work:

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
// Function Expressions are created when the execution reaches them. 
// That would happen only in the line (*). Too late.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined


let age1 = 16; // take 16 as an example

if (age1 < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

// What can we do to make welcome visible outside of if?

// The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

let age2 = prompt("What is your age?", 18);

let welcome;

if (age2 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


// When to choose Function Declaration versus Function Expression?
// As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

// That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

// …But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.

// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
