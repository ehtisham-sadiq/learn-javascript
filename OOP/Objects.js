// 1. What is OOP?
// Definition: OOP is a programming paradigm that relies on the concept of classes and objects to structure software programs.
// Types of Programming Paradigms: https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/
// Importance of OOP in Programming:
// - OOP allows you to create objects that can contain both data and functions.
// - OOP allows you to create objects that can be reused in different parts of your program using inheritance.
// - OOP allows us to enhance software maintainability and security using encapsulation.
// - OOP allows us to create objects that can interact with each other using polymorphism.
// - OOP allows use to facilitate the design of complex software systems using abstraction.

// 2. Pillars of OOP
// - Encapsulation
// - Inheritance
// - Polymorphism
// - Abstraction


// 3. Basic Concepts of OOP
// - Objects: Instances of classes that contain both data and functions
// (instances of classes that represents entities with attibutes(data)  and behaviors(functions)). 

// Example: Create an Object representing a Car with attributes like color and methods like drive.

const car = {
    color: "red", // attribute of the car object
    drive : function(){ // method of the car object 
        console.log("The car is driving");
    }
}

console.log(car.color); // accessing the color attribute of the car object
car.drive(); // calling the drive method of the car object
// console.log(car.drive()); // calling the drive method of the car object