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

function greet() {
    console.log("hello");
}
console.log(greet)
greet.language = "English";
console.log(Object.keys(greet))


