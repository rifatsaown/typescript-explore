let userId:(string | number) = 123; // union data type
userId = "123"; // union data type
userId = 123; // union data type

const getId = (userId:string | number) => {
    console.log(userId);
}
getId(123);
getId("123");