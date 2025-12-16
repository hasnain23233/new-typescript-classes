var _a;
///number data types 
var num1 = 10;
console.log(num1);
var data3 = 39;
console.log(data3);
//types of number
var types1 = 4099;
var hexa = 0x19248;
var binary = 5;
//these are the importent concept of the typscript
//string value
var prson1 = "wiki";
var personNo = 3;
var fullData = "my name is ".concat(prson1, " and the number is ").concat(personNo);
var number = 93;
var convetString = number.toString();
console.log(convetString);
///boolean
var blee = true;
console.log(blee);
var convertingBolIntoString = blee.toString();
console.log(convertingBolIntoString);
///null and undefine 
var varible1 = null;
console.log(varible1);
varible1 = "Alam";
console.log(varible1);
var undefin1Varible = undefined;
console.log(undefin1Varible);
///bigint datatype in typescript
// var bigIntVar : bigint  = 903432093492n
// var bigIntVar2  = 1342353243n
var bigIntVar3 = 3;
// console.log(bigIntVar + bigIntVar2)
//symbol data type
var SymboData = Symbol();
var SymboData2 = Symbol();
console.log(SymboData == SymboData2);
console.log(SymboData);
console.log(SymboData2);
var DynamicID = Symbol('id');
var dataObj = (_a = {},
    _a[DynamicID] = 1,
    _a.name = "aslam",
    _a);
console.log(dataObj[DynamicID]);
