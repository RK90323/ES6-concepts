// Using spread operator with arrays
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log("Original array:", array1);
console.log("New array using spread operator:", array2);

// Using spread operator with objects
const object1 = { name: "RK", age: 27 };
const object2 = { ...object1, city: "Hyderabad", occupation: "Developer" };

console.log("Original object:", object1);
console.log("New object using spread operator:", object2);
