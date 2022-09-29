"use strict";
let userNames; // array data type
userNames = ["John", "Jane", "Jack"];
console.log(userNames[0]);
userNames.push("Jill"); // add new element to array at the end
console.log(userNames);
userNames.pop(); // remove last element from array
console.log(userNames);
console.log(userNames.pop()); // remove last element from array and return it
userNames.shift(); // remove first element from array
console.log(userNames);
userNames.unshift("Jill"); // add new element to array at the beginning
console.log(userNames);
