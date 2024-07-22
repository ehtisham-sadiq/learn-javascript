// 1. What are Classes?
// Definition: Classes are blueprints for creating objects , defining their attributes and methods.
// Example: Define a class for a student with properties like name and age and methods like study.
// Attributes: Properties of an object that define its state.
// Methods: Functions that define the behavior of an object.

// What is Constructor?
// Definition: A constructor is a special method that is called when an object is created from a class.
// Why do we need constructor?
// - We need a constructor to initialize the attributes of an object when it is created.
// - We need a constructor to perform any setup that is required when an object is created.
// - We need a constructor to provide default values for the attributes of an object.
// - We need a constructor to perform any other initialization that is required when an object is created.

class Student {
    constructor(name, age){
        console.log("Constructor is called");
        this.name = name;
        this.age = age;
    }
    study(){
        console.log(`${this.name} is studying.`);
    }
    introduce(){
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    };

    // define a method name areaofinterest taking an argument interest
    areaofinterest(interest){
        console.log(`My area of interest is ${interest}`);
    }

    // define a method which takes one argument of class `name` and othher argument we pass whiling calling the method

    salary(salary){
        console.log(`My name is ${this.name} and my salary is ${salary}`);
    }
}

// Create constructor using name and age
const student1 = new Student("Mehwash", 21);
console.log(student1.name);
console.log(student1.age);
student1.study();
student1.introduce();
student1.areaofinterest("Web Development");
student1.salary(50000);

// create constructor without using name and age
const student2 = new Student();
student2.name = "Ehtisham"
console.log(student2.name);
student2.age = 23;
console.log(student2.age);
student2.study();
student2.introduce();
student2.areaofinterest("Machine Learning");
student2.salary(60000);

// Can we change the name and age of the student object after it is created?
// Yes, we can change the name and age of the student object after it is created using the dot notation.

const student3 = new Student("Ali", 25);
student3.name = "Ahmed";
console.log(student3.name);
student3.age = 30;
console.log(student3.age);
student3.study();
student3.introduce();
student3.areaofinterest("Data Science");