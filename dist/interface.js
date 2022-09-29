"use strict";
/* ------------------------------------------------------------------------------------------
Detail about Interface
Interface is a blueprint of an object
Interface is a collection of properties and methods
Interface is a contract between two entities
Interface is a way to define a structure of an object, class, function, array, variable.
----------------------------------------------------------------------------------------------*/
let newUsers = [];
let newUser1 = {
    name: 'John',
    age: 25,
    email: 'abc@iubat.edu',
    password: '123456',
};
newUsers.push(newUser1);
let newUser2 = {
    name: 'Monir',
    age: 25,
    email: 'monir@edu.com',
    password: '123456',
};
newUsers.unshift(newUser2);
const displayUser = (userDetails) => {
    console.log(`
    Name: ${userDetails.name}
    Age: ${userDetails.age}
    Email: ${userDetails.email}
    Password: ${userDetails.password}`);
};
newUsers.forEach(userDetails => displayUser(userDetails));
