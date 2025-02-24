// Comparing uppercase "A" and lowercase "a"
let uppercaseA = "A";
let lowercaseA = "a";

if (uppercaseA < lowercaseA) {
    console.log(`The lowercase "a" is greater than the uppercase "A".`);
} else if (uppercaseA > lowercaseA) {
    console.log(`The uppercase "A" is greater than the lowercase "a".`);
} else {
    console.log(`The uppercase "A" is equal to the lowercase "a".`);
}

console.log( 'Z' > 'A' ); // true
console.log( 'Glow' > 'Glee' ); // true
console.log( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


alert( true == 1 ); // true
alert( false == 0 ); // true

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


// Strange result: null vs 0
// Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)


// Summary

