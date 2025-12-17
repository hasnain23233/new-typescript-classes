//Array in Typescript and how to use them 
var arr = [2, 4, 45];
console.log(arr);
arr.push(3);
var arrStr = ['Yellow', 'red', 'white'];
console.log(arrStr);
var arrNumber = [12, 32, 53];
console.log(arrNumber);
var arrString = ['Tofail', 'Inayat', 'Ehtisham'];
console.log(arrString);
//Turple in typescript
var userData = [1, "Hasnain", true];
userData.push(800);
console.log(userData);
var userData2 = [32, 'JavaScript Developer'];
console.log(userData2);
///abjects in typescript
var userDataObj = {
    name: 'Viki',
    email: "viki@gmail.com",
    phone: 323942,
    login: true,
    nustingObject: {
        city: 'islamabad',
        country: 'pakistan'
    }
};
console.log(userDataObj);
var addingDyamincObjectElement = {
    name: "david",
    phone: 4340349
};
addingDyamincObjectElement.city = 'UK';
//working on any and unknow 
var anyDatatype = 'adfa';
anyDatatype = 390;
anyDatatype = [];
anyDatatype = 548503;
console.log(anyDatatype);
var unknowDataType = 4380;
unknowDataType = 'u3495';
if (typeof unknowDataType === 'string') {
    console.log('check the datatype before using the unknow datatype');
}
console.log(unknowDataType);
