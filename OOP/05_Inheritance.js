// 1. What is inheritance in OOP?
// Inheritance is a mechanism in OOP that allows a new class to inherit properties and methods from an existing class.
// The existing class is called the parent class or superclass, and the new class is called the child class or subclass.
// The child class can access all the public and protected properties and methods of the parent class.
// The child class can also have its own properties and methods.
// Inheritance promotes code reusability and helps in creating a hierarchy of classes.

// Limitations of Inheritance:
// - Inheritance can lead to a complex hierarchy of classes.
// - Inheritance can create dependencies between classes.
// - Inheritance can lead to the diamond problem in multiple inheritance.
// - Inheritance can make the code harder to understand and maintain.



// Types of Inheritance in OOP:
// - Single Inheritance: A child class inherits from a single parent class(GrandFather -> Father).
// - Multilevel Inheritance: A child class inherits from another child class(GrndFather -> Father -> Son).
// - Hierarchical Inheritance: Multiple child classes inherit from a single parent class(GrandFather -> Father, GrandFather -> Mother).
// - Multiple Inheritance: A child class inherits from multiple parent classes(Father, Mother -> Child).
// - Hybrid Inheritance: A combination of two or more types of inheritance. (Father -> Son, Mother -> Son, Son -> GrandSon).

// Example of Single Inheritance:
class Animal{
    constructor(name){
        this.name = name;
    }
    makeSound(){
        return `${this.name} is making a sound`;
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name); // here super() is used to call the constructor of the parent class.
        this.breed = breed;
    }
    display(){
        return `${this.name} is a ${this.breed}`;
    }
}

const dog1 = new Dog('Buddy', 'Labrador');
