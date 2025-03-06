let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
// We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.
// The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”.
// We can add, remove and read files from it at any time.

// Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;
// To remove a property, we can use the delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

// this would give a syntax error
user.likes birds = true

// The last property in the list may end with a comma:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;


let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"


let bag1 = {
    apple: 5, // the name of the property is taken from the variable fruit
  };
  
  console.log( bag1["apple"])
  console.log( bag1.apple)
  //bag["apple"] is same as bag.apple if the key is string without spaces


function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

//   As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

//   But for an object property, there’s no such restriction:
  
  // these properties are all right
  let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return ); 


