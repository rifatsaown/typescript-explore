"use strict";
let nUsers = [];
let nUser1 = { name: "John", age: 30 };
nUsers.push(nUser1);
let nUser2 = { name: "John Von", age: 23 };
nUsers.unshift(nUser2);
let nUser3 = { name: "On Von", age: 200 };
nUsers.unshift(nUser3);
console.log(nUsers);
let getRequest = "POST";
const requestHandeler = (request) => {
    console.log(request);
};
requestHandeler("POST");
