"use strict";
// enum stores a set of constants in numeric or string format and duplicates are not allowed
// enum data type : numeric,string,heterogeneous
//numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["saveData"] = 2] = "saveData";
    requestType[requestType["deleteData"] = 3] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
//string enum
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "read";
    requestType2["saveData"] = "save";
    requestType2["deleteData"] = "delete";
})(requestType2 || (requestType2 = {}));
console.log(requestType2);
console.log(requestType2.readData);
//heterogeneous enum
var requestType3;
(function (requestType3) {
    requestType3[requestType3["readData"] = 1] = "readData";
    requestType3["saveData"] = "save";
    requestType3[requestType3["deleteData"] = 3] = "deleteData";
})(requestType3 || (requestType3 = {}));
console.table(requestType3);
