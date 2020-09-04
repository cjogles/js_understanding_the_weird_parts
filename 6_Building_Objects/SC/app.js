function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person("john", "doe");
console.log(john);

// new creates a new empty object. and then it invokes
// the function to fill it up and set its address so 
// the this variable points there. it will return the 
// object. 

// built in function constructor
// any time you see "new" you are creating a type 
// of object. not a primitive see below:

var a = new Number(3);

// a is now an object. and since it is a number object
// it will have Number methods attached. 

var b = new String('John');

// now B will be a string object. its not a primitive.
// its an object.

var c = new Date()

// add things to prototype to do cool things

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("john".isLengthGreaterThan(3));

// gets a little dicy when you need a real primitive. 

var a = 3 
var b = new Number(3) // built in function constructor does not build primitive. 
a == b // true
a === b // false not the same type. 

// dangerous aside Arrays and for... in... 

var arr = ["john", "mary", "harry"];
Array.prototype.myCustomFeature = 'cool!';
for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}
// use the actual for loop instead or else you'll 
// print extra prototype props. 

// Object.create and Pure Prototypcal Inheritance
var person = {
    firstname: "Default",
    lastname: "Default",
    greet: function() {
        return 'Hi' + this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

// polyfill = code that adds feature that engine may lack

// ES6 and Classes

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname - lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

var john = new Person('John', 'Doe');

// extends sets the prototype(__proto__)
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
        // super will pass the initial values
        // down the prototype chain.
    }
    greet() {
        return 'Yo ' + this.firstname;
    }
}