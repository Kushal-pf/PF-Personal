//Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.


// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.


// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

console.log( NaN + 1 ); 
console.log( 3 * NaN ); 
console.log( "not a number" / 2 - 1 ); 

// JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.

// the safe integer range ±(2^53-1) 

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello"  
// Single quotes: 'Hello' same as Single qoutes
// Backticks: `Hello` used for embeded a varible 


NULL 
undefined

// The “null” value
// The special null value does not belong to any of the types described above.

// It forms a separate type of its own which contains only the null value:

// let age = null;
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The code above states that age is unknown.


// The “undefined” value
// The special value undefined stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
// let age;
// alert(age); // shows "undefined"

//Technically, it is possible to explicitly assign undefined to a variable:

let age = 100;

// #change the value to undefined
age = undefined;

alert(age); // "undefined"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// The result of typeof null is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, that’s an error in the language.

// Some people prefer typeof(x), although the typeof x syntax is much more common.