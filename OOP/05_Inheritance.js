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
console.log(dog1.name); // Buddy
console.log(dog1.breed); // Labrador
console.log(dog1.makeSound()); // Buddy is making a sound
console.log(dog1.display()); // Buddy is a Labrador




// 2. Multilevel Inheritance: A child class inherits from another child class.
class Puppy extends Dog{
    constructor(name, breed, age){
        super(name, breed);
        this.age = age;
    }
    show(){
        return `${this.name} is a ${this.breed} and is ${this.age} years old`;
    }
}

const puppy1 = new Puppy('Tommy', 'Pug', 2);
console.log(puppy1.name); // Tommy
console.log(puppy1.breed); // Pug
console.log(puppy1.age); // 2
console.log(puppy1.makeSound()); // Tommy is making a sound
console.log(puppy1.display()); // Tommy is a Pug
console.log(puppy1.show()); // Tommy is a Pug and is 2 years old

// 3. Hierarchical Inheritance: Multiple child classes inherit from a single parent class.
class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    display(){
        return `${this.name} is a ${this.breed}`;
    }
}
const cat1 = new Cat('Snowy', 'Persian');
console.log(cat1.name); // Snowy
console.log(cat1.breed); // Persian
console.log(cat1.makeSound()); // Snowy is making a sound
console.log(cat1.display()); // Snowy is a Persian

// 4. Multiple Inheritance: A child class inherits from multiple parent classes.
// Example of Multiple Inheritance: Create a class Bird that inherits from both Animal and FlyingCreature.
// const FlyingCreature = Base => class extends Base{}; // Mixin for FlyingCreature class that adds flying capabilities.
// what is mixin? Mixin is a class that provides methods to other classes. It is a way to reuse code in multiple classes. 
// In the above code, FlyingCreature is a mixin that adds flying capabilities to the Bird class.
const FlyingCreature = Base => class extends Base{
    fly(){
        return `${this.name} is flying`;
    }
};

class Bird extends FlyingCreature(Animal){ // Here FlyingCreature is a mixin that adds flying capabilities to the Bird class. FlyingCreature(Animal) is a higher order function that returns a class.
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    display(){
        return `${this.name} is a ${this.breed}`;
    }
}

const bird1 = new Bird('Eagle', 'Golden Eagle');
console.log(bird1.name); // Eagle
console.log(bird1.breed); // Golden Eagle
console.log(bird1.makeSound()); // Eagle is making a sound
console.log(bird1.display()); // Eagle is a Golden Eagle
console.log(bird1.fly()); // Eagle is flying

// 5. Hybrid Inheritance: A combination of two or more types of inheritance.
// Example of Hybrid Inheritance: Create Swimmer mixin that adds swimming capabilities to the Fish class.

const SwimmingCreature = Base => class extends Base{
    swim(){
        return `${this.name} is swimming`;
    }
}

class Fish extends SwimmingCreature(Animal){
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    display(){
        return `${this.name} is a ${this.breed}`;
    }
}

const fish1 = new Fish('Goldfish', 'Goldfish');
console.log(fish1.name); // Goldfish
console.log(fish1.breed); // Goldfish
console.log(fish1.makeSound()); // Goldfish is making a sound   
console.log(fish1.display()); // Goldfish is a Goldfish
console.log(fish1.swim()); // Goldfish is swimming