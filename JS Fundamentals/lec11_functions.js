function name(parameter1, parameter2, ... parameterN) {
    // body
    
}

// When a value is passed as a function parameter, it’s also called an argument.


// In other words, to put these terms straight:

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.



// Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

showMessage("Ann");
// That’s not an error. Such a call would output "*Ann*: undefined". As the value for text isn’t passed, it becomes undefined.

// We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =:

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given".


// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:

showMessage("Ann", undefined); // Ann: no text given
// Here "no text given" is a string, but it can be a more complex expression, which is only evaluated and assigned if the parameter is missing. So, this is also possible:

function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}
// Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.

// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.

// On the other hand, it’s independently called every time when text is missing.

// Default parameters in old JavaScript code
// Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.

// Nowadays, we can come across them in old scripts.

// For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = 'no text given';
  }

  alert( from + ": " + text );
}
// …Or using the || operator:

function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || 'no text given';
 
}
