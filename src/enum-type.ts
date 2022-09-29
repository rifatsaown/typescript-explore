// enum stores a set of constants in numeric or string format and duplicates are not allowed
// enum data type : numeric,string,heterogeneous

//numeric enum
enum requestType {
    readData = 1,
    saveData = 2,
    deleteData = 3,
}
console.log(requestType);

//string enum
enum requestType2 {
    readData = "read",
    saveData = "save",
    deleteData = "delete",
}
console.log(requestType2);
console.log(requestType2.readData);

//heterogeneous enum
enum requestType3 {
    readData = 1,
    saveData = "save",
    deleteData = 3,
}
console.table(requestType3);


