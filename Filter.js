// Sample array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter even numbers
const filterEven = (number) => {
  return number % 2 === 0;
};

// Use the filter method to create a new array of even numbers
const evenNumbers = numbers.filter(filterEven);

// Display the result
console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);
