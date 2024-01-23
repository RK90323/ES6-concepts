const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first);  
console.log(second);  
console.log(fourth); 

const person = {
  name: 'RK',
  age: 27,
  city: 'Hyderabad'
};

const { name, age, city } = person;

console.log(name); 
console.log(age);  
console.log(city);
