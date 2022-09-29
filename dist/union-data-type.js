"use strict";
let userId = 123; // union data type
userId = "123"; // union data type
userId = 123; // union data type
const getId = (userId) => {
    console.log(userId);
};
getId(123);
getId("123");
