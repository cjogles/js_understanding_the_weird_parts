// Uncomment the code you want to test as you review the notes. 

// ----------------------------------
// var a = 'Hello World!';

// function b() {
//     console.log('Called b!');
// }

// b();
// console.log(a);
// ----------------------------------

// When I invoke function B and then print variable a... what do you expect
// to happen??? 

// I expect the JS engine to parse my code first. It will first parse 
// over variable a and save it to the global object and then will go 
// over function b and save it to the global window object. then it will 
// read b's invokation and invoke it. Then print a. 

// ----------------------------------
// b();
// console.log(a);

// var a = 'Hello World!';

// function b() {
//     console.log('Called b!');
// }
// ----------------------------------

// When I invoke function b at the beginning what is going to happen? 

// in most programming languages you would expect an error. 
// I understand the JS engine will parse the code first before executing
// code. That being the case, the syntax parser will hoist or save 
// the function definition to the global window object, as well as save 
// the variable a in the same manner. The difference is, the function's
// whole definition is saved, but the variables value is initialized 
// at this time as undefined. So when lines 18 and 19 run, b will work, 
// but a will print "undefined". If I deleted line 21 though, then I would 
// get a reference error! a would not be defined at all and would therefore
// not get saved or hoisted to the global object. 
// Another way to look at it is the CREATION PHASE of the global execution
// context. In the creation phase we have the global object and 'this' 
// created. The link to the outer environment is created. The JS engine 
// sets up memory space for variable and functions. This is confusingly 
// called hoisting. variables are saved and initalized as "undefined", and 
// whole function definitions are saved. 


// FUNCTION INVOCATION EXAMPLE 1
// ----------------------------------
// function b() {

// }

// function a() {
//     b();
// }

// a();
// ----------------------------------

// First a global execution context is created. parser will parse the 
// code and will create a 'this' keyword and the global object. It will 
// attach function b and a to the this or global object. After the creation
// phase, function a will be invoked or called. 
// When this happens function a's execution context will be pushed onto 
// the execution stack. It will have its own creation and execution 
// phases. Whichever execution context is on top, is the one that is 
// currently running. However, since function a invokes function b, that
// will push another execution context for function b onto the execution
// call stack. When b finishes, it will be popped off the stack then a, then
// the global.

// VARIABLE ENVIRONMENT EXAMPLE 1
// ----------------------------------
// function b() {  
//     var myVar;
//     console.log(myVar)
// }

// function a() {
//     var myVar = 2;
//     console.log(myVar)
//     b();
// }

// var myVar = 1;
// console.log(myVar)
// a();
// ----------------------------------

// First the global execution context is created. the global object is in 
// the variable environment of the global space. then function a's execution
// context has its own myVar, and so on with b(). Even though myVar is 
// declared 3 times, they are unqiue. 

// ASYNC EXAMPLE EXAMPLE 1
// ----------------------------------
function waitThreeSeconds() {  
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
// ----------------------------------

// This function simulates an action that takes a long 
// time (3 seconds). the first function will take 3 secs
// to finish running, then it will print. the second function
// will be the function to run when a click event is looked 
// at by the JS engine. So line 114 will "LISTEN" for 
// a click event by adding a click to the event queue, 
// and will pass the clickHandler function as an execution
// context after the execution stack is empty. 