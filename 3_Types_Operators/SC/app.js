// uncomment the code example you want to run.

// ----------------------------------
// var a = 3 + 4;
// console.log(a);
// ----------------------------------

// syntax parser saw the plus sign, and added the two 
// numbers. the plus sign is the add operator. 
// its a function. This is "INFIX NOTATION".

// operator precedence and associativity examples
// ----------------------------------
// var a = 3 + 4 * 5;
// console.log(a)
// var b = 2;
// var c = 3;
// var d = 4;
// b = c = d;
// console.log(b)
// console.log(c)
// console.log(d)
// ----------------------------------

// will the + function or * function run first?
// first thing too look at is the JS operator precedence
// check MDN for op precednece. Since * has higher 
// precedence it will get called first. so 4 * 5 
// goes first and will return 20. then 20 + 3 == 23. 
// Remember higher precedence score WINS and gets 
// that operator called first. () get called first. 
// if you have the same operator over and over or if 
// a group of ops have the same precedence then 
// we start to look at associativity either starting 
// left to right or right to left. 
// the equal operator being used multiple times is 
// right to left associativity. So the right one will
// run first, then the next one and so on all the way
// to the left.

// COMPARISON OP EXAMPLE
// ----------------------------------
// console.log(3 < 2 < 1); 
// ----------------------------------

// the above statement will return true. 
// this happens because the two less than 
// ops are the same, so according to its 
// defined associativity (left to right),
// the 3 < 2 will run first and return FALSE
// then the JS engine will coerce the boolean 
// false into a number because that's what the 
// less then op expects. False gets coerced to a zero
// so zero is less then 1! Weird right?

// EXISTENCE AND BOOLEAN EXAMPLE
// ----------------------------------
var a;

// goes to internet and looks for value
a = 'hi';
if (a) {
    console.log("something is there.");
}
// ----------------------------------

// the above code will check if a evaluates to 
// true or false. Then will return something. 
// if a becomes 0 or undefined though, it will return
// false.