/* ------------------------------------------------------------------------------------------
Detail about Interface
Interface is a blueprint of an object
Interface is a collection of properties and methods
Interface is a contract between two entities
Interface is a way to define a structure of an object, class, function, array, variable. 
----------------------------------------------------------------------------------------------*/

interface iUser {
    name: string;
    age: number;
    email: string;
    password: string;
}

let newUsers: iUser[] = [];

let newUser1: iUser = {
    name: 'John',
    age: 25,
    email: 'abc@iubat.edu',
    password: '123456',
}
newUsers.push(newUser1);
let newUser2: iUser = {
    name: 'Monir',
    age: 25,
    email: 'monir@edu.com',
    password: '123456',
}
newUsers.unshift(newUser2);

const displayUser = (userDetails: iUser) => {
    console.log(`
    Name: ${userDetails.name}
    Age: ${userDetails.age}
    Email: ${userDetails.email}
    Password: ${userDetails.password}`);
}

newUsers.forEach(userDetails => displayUser(userDetails));