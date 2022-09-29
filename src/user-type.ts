type amar = {name:string,age:number} // type alias is used to create a new type

let nUsers:amar[] = [];

let nUser1:amar = { name: "John", age: 30 };
nUsers.push(nUser1);
let nUser2:amar = { name: "John Von", age: 23 };
nUsers.unshift(nUser2);
let nUser3:amar = { name: "On Von", age: 200 };
nUsers.unshift(nUser3);

console.log(nUsers);

type RequestType = "GET" | "POST"; 
let getRequest: RequestType = "POST";

const requestHandeler = (request: RequestType) => {
    console.log(request);
}
requestHandeler("POST");