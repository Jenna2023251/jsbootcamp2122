// Day 1 JS Bootcamp
// by Jenna

// Primitive Data Types and Literal Values
5 // Number
'ur mum' // String
true // Boolean

// Storing Values into a Variable (primitive)
var urMumWeight = 4000
console.log(urMumWeight);

// Collection Data Types
// Arrays are ordered lists
var groceries = ['milk', 'bread', 'egg'];
console.log(groceries[1]);

// Objects can act like unordered lists (dictionaries)
var cart = {
  wheels: 4,
  push: () => {
    console.log('going forward');
  }
}
console.log(cart.wheels);
cart.push()

// Conditional statements will run the code in the curly braces
// if the expression provided in parenthesis resolves as 'true'
if (cart.wheels > 4) {
  console.log('You have too many wheels');
} else if (cart.wh          eels == 4) {
  console.log('You have the correct number of wheels');
} else {
  console.log('You do not have enough wheels');
}

// Single line conditionals
if (cart.wheels) console.log("You have wheels");
else console.log("You do not have wheels");
