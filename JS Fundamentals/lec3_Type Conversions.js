// String Conversio
// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Numeric Conversion
// Numeric conversion in mathematical functions and expressions happens automatically.

// For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers

// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed

// NUMERIC CONVERSION, EXPLICIT  Number(value)
// // There are three types of conversion:
// Value	           Becomes…
// undefined	       NaN
// null                0
// true and false      1 and 0
// string    	       Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN.

//BOOLEAN Conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true

// Summary


// The three most widely used type conversions are to string, to number, and to boolean.

// String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

// Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

// The conversion follows the rules:

// Value	        Becomes…
// undefined	    NaN
// null	            0
// true / false   	1 / 0
// string	         The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.






// Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

// Follows the rules:

// Value	Becomes…
// 0, null, undefined, NaN, ""	false
// any other value	true