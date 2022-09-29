let users:object[] = []; // object array is used to store objects

let user1:object = { name: "John", age: 30 }; // object is used to store objects
users.push(user1);

let user2: {name:string,age:number} = { name: "John", age: 30 }; // object is used to store objects
users.push(user2);

let user3:{name:string,age?:number} = { name: "John"} // "?" is used to make a property optional
users.push(user3);

console.log(users);
