// Example 1: Basic Arrow Function
const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(5, 3)); 
  
  // Example 2: Arrow Function with Implicit Return
  const multiply = (a, b) => a * b;
  
  console.log(multiply(4, 6)); 
  
  // Example 3: Arrow Function with One Parameter
  const square = x => x * x;
  
  console.log(square(9)); 
  
  // Example 4: Arrow Function in Array Map
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map(x => x * x);
  
  console.log(squaredNumbers); 
  