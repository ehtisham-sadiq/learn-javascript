// There are three types of access modifers in JS:
// 1. Public
// 2. Private
// 3. Protected

// 1. Public Access Modifier
// - Public access modifier is the default access modifier in JS.
// - We can access public attributes and methods from anywhere in the program.

class Car{
    constructor(make, model){
        this.make = make; // public attribute
        this.model = model; // public attribute{
        
    }
    start(){
        console.log(`${this.make} ${this.model} is starting.`); // public method
    }
}

const car1 = new Car('Toyota', 'Corolla');
console.log(car1.make); // accessing public attribute
car1.start(); // accessing public method


// 2. Private Access Modifier
// - Private access modifier is used to restrict access to attributes and methods of a class.
// - We can't access private attributes and methods from outside the class.
// - Use to hide sensitive data.
// - In JS, we can create private attributes and methods using `#` symbol.

class BankAccount{
    #balance; // private attribute
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    deposit(amount){
        this.#balance += amount; // private method
        console.log(`Deposited: ${amount}, new balance: ${this.#balance}`);
    }
    getBalance(){
        return this.#balance; // private method
    }
}

const account1 = new BankAccount(1000);
account1.deposit(500);
// account1.getBalance();
console.log(account1.getBalance());

// console.log(account1.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// 3. Protected Access Modifier
// - Protected access modifier is used to restrict access to attributes and methods of a class.
// - We can access protected attributes and methods from the class itself and its subclasses.

class Animal{
    _name; // protected attribute
    constructor(name, species){
        this._name = name;
    }
    makeSound(){
        console.log(`${this._name} is making sound.`);
    }
}

class Dog extends Animal{
    makeSound(){
        console.log(`${this._name} is barking.`);
    }
}

const dog1 = new Dog('Tommy');
dog1.makeSound(); // accessing protected method