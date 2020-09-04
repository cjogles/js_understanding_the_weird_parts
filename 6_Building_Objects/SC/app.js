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

