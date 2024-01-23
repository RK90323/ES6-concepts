// Declare a constant variable
const PI = 3.14159;

// Attempting to reassign a constant variable will result in an error
// Uncommenting the line below will cause an error
// PI = 3.14;

// Using const with objects or arrays
const person = {
  name: 'RK',
  age: 27
};

// You can modify properties of an object declared with const
person.age = 28;

// However, attempting to reassign the entire object will result in an error
// Uncommenting the line below will cause an error
// person = { name: 'MK', age: 30 };

// Output the values
console.log("PI:", PI);
console.log("Person:", person);
