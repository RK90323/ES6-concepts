// Define a class called 'Person'
class Person {
    // Constructor to initialize object properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information about the person
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Create instances of the 'Person' class
  const person1 = new Person('RK', 27);
  const person2 = new Person('MK', 30);
  
  // Display information about the created persons
  person1.displayInfo();
  person2.displayInfo();
  