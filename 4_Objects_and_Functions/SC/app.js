// object dot create new object

// var person = new Object();
// add properities and methods
// use the computed member access operator []
// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);
// you can use the dot operator as well. instead of 
// the computed member access operator
// console.log(person.firstname)

// person.address = new Object();
// person.address.street = "111 Main St.";
// you'll notice these return the same thing
// console.log(person.address.street);
// console.log(person["address"]["street"]);

// NAMESPACES i.e. containers for variables and functions
//  (faking it with objects)

// var greet = "hello";
// var greet = "hola";
// console.log(greet);
// var english = {};
// var spansih = {};
// english.greet = "hello";
// spansih.greet = "hola";
// console.log(english.greet);

// functions are objects

// function greet() {
//     console.log("hello");
// }
// console.log(greet)
// greet.language = "English";
// console.log(Object.keys(greet))

// THIS keyword examples

// ----------------------------------------
// function a() {         // function statement
//     console.log(this);
// }

// var b = function () { // function expression here
//     console.log(this); // because it results in value
// }

// a();
// b();

// var c = {
//     name: 'The c object',
//     log: function(){
//         var self = this; // set equal to by reference
//                         // same location in memory
//             // this is because its inside a method of 
//             // an object! Remember that. only one level 
//             // deep. 
//         self.name = 'Updated c object';
//         console.log(self);

//         var setname = function(newname){ // when its execution context was created, even though its sitting inside an object i created, its 'this' keyword will point to the global object!!! LAME. 
//             self.name = newname
//         }
//         setname("updated again! the c object") // updated global object :( 
//         console.log(self)
//     }
// }

// c.log();
// ----------------------------------------

// invoking a() will create an execution context with the 
// keyword 'this'. What will 'this' point to? We have a global 
// execution context, one with A() and one with B(). Each gets its 
// own 'this' keyword. All point to the same address. The 
// Global object the Window. So long story short,
// when just invoking you will scope chain to the global 
// object.
// in the case of var c, when I invoke the method on an 
// object, the this kewword becomes the object that that 
// method is sitting inside of! We can update the 
// this keyword then. 

// ARGUMENTS EXAMPLES

// function greet(firstname, lastname, language) {
//     language = language || 'en';
//     lastname = lastname || 'Smith';
//     firstname = firstname || 'Johnny';
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments)
// }

// greet();
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'es');

// AUTOMATIC SEMI COLON INSERTION DANGER

// function getPerson() {
//     return 
//     {
//         firstname: "Tony"
//     }
// }

// console.log(getPerson);

// IIFE's examples

var firstname = 'John';
var greeting = 'Global Hi';

(function(global, name) {
    // this is inside another functions execution
    // context. Remember it was invoked! 
    console.log(global.greeting + ' ' + name)
})(window, firstname);