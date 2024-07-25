// Question 1: How do can we can define a Class in JS and Instantiate an object from it?
// Answer: In JS, a class is defined using `class` keyword. An object is instantiated from a class using `new` keyword.
// Example:

// Here , we are defining a class `Student` and instantiating an object `student1` from it.
class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const student1 = new Student('John', 20);


// Question 2: How can we add attributes and methods to an object after it has been created?
// Answer: We can add attributes and methods to an object using `Object.defineProperty()` method.
// Example:
//First Method
student1.rollNo = 101; // add an attribute `rollNo` to the object `student1`.

student1.getNamewithRollNo = function(){
    return `Name: ${this.name}, Roll No: ${this.rollNo}`; // add a method `getNamewithRollNo` to the object `student1`.
}


// It is a second method to add attributes and methods to an object.
// Here, we are adding an attribute `rollNo` to the object `student1`.
Object.defineProperty(student1, 'rollNo', {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
});