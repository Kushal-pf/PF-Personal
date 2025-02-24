// The nullish coalescing operator is written as two question marks ??.

// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
// The nullish coalescing operator isn’t anything new. It’s just a nice syntax to get a more concise code when we need to choose the first “defined” value from the list.
// The precedence of the nullish coalescing operator ?? is lower than || and &&, so it’s executed after them.
// The nullish coalescing operator is not supported in IE.
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let height = 0;

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

// The code below triggers a syntax error:

// let x = 1 && 2 ?? 3; // Syntax error


// The precedence of ?? is 5, which is lower than && and ||, so they execute first

// Summary
// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// It’s used to assign default values to variables:

// // set height=100, if height is null or undefined
// height = height ?? 100;
// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

// It’s forbidden to use it with || or && without explicit parentheses.