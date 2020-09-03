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

// var firstname = 'John';
// var greeting = 'Global Hi';

// (function(global, name) {
//     // this is inside another functions execution
//     // context. Remember it was invoked! 
//     console.log(global.greeting + ' ' + name)
// })(window, firstname);

// CLOSURES

// function greet(whattosay) {

//     return function(name) {
//         console.log(whattosay + ' ' + name);
//     }

// }

// var sayHi = greet('Hi');

// sayHi('Tony');

// the greet function ends, and then it hangs around 
// with the sayHi variable. The execution context 
// is popped off the stack, but the variable would 
// eventually be cleared out through garabage colleciton,
// but before that the variable stays available via 
// closures

// CLOSURES PART 2

// function buildFunctions() {

//     var arr = [];

//     for (var i = 0; i < 3; i++) {
//         arr.push(
//             (function(num) {
//                 return function() {
//                     console.log(num);
//                 }
//             })(i)
//         )
//     }

//     return arr;
// }

// var fs = buildFunctions();
// console.log(fs);
// fs[0]();
// fs[1]();
// fs[2]();

// each function returns all 3s! why not 1, 2, 3???
// its because i at the time of the return is == 3. 
// so when we invoke the inner function we get i = 3
// each time. 

// function factories:

// function makeGreeting(language) {

//     return function (firstname, lastname) {
//         if (language == "en") {
//             console.log('Hello ' + firstname + ' ' + lastname)
//         }
//         if (language == "es") {
//             console.log('Hola' + firstname + ' ' + lastname)
//         }
//     }

// }

// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');

// greetEnglish("jackson", "ogles")

// Closures and Call backs

// function sayHiLater() {
//     var greeting = 'Hi';
//     setTimeout(function() {
//         console.log(greeting);
//     }, 3000);
// }

// call(), apply(), bind()

// all functions have access to these methods.
// you would use this when you are function borrowing
// that is when a method is not inside an object, so 
// you borrow it with apply or call or bind. 
// you can also use it when function currying. 
// that is when you permanently set variables with bind
// and create a new function with permanetnly changed 
// copy. 