// What is destructor?
// Definition: A destructor is a special method that is called when an object is deleted or destroyed.
// Why do we need destructor?
// - We need a destructor to perform any cleanup that is required when an object is deleted or destroyed.
// - We need a destructor to release any resources that are allocated when an object is created.

// In JavaScript, we do not have destructors because JavaScript has a garbage collector that 
// automatically releases the memory used by objects when they are no longer needed.
// Therefore, we do not need to write destructors in JavaScript to release memory used by objects.

// However, we can use the delete operator to delete an object in JavaScript.
// The delete operator removes a property from an object.
// Syntax: delete object.property;

// Example: Deleting a property from an object
class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    study(){
        console.log(`${this.name} is studying.`);
    }
    introduce(){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    };
}

// Create constructor using name and age
const student1 = new Student("Mehwash", 21);
console.log(student1.name);
console.log(student1.age);
student1.study();

// delete the age attribute of student1 object
delete student1.age;
console.log(student1.age); // undefined

// Question: delete an object vs delete a property of an object?