///number data types 
var num1: number = 10
console.log(num1)

var data3 : number | string = 39
console.log(data3)

//types of number

var types1 = 0o10003;
var hexa = 0x19248;
var binary = 0b0101;

//these are the importent concept of the typscript


//string value

var prson1 : string = "wiki"
var personNo: number = 3

var fullData : string = `my name is ${prson1} and the number is ${personNo}`


var number : number = 93
var convetString : string = number.toString()
console.log(convetString)


///boolean

var blee: boolean = true
console.log(blee)

var convertingBolIntoString : string = blee.toString()
console.log(convertingBolIntoString)

///null and undefine 

var varible1 : null | string = null
console.log(varible1)
varible1 = "Alam"
console.log(varible1)

var undefin1Varible : undefined = undefined
console.log(undefin1Varible)



///bigint datatype in typescript
// var bigIntVar : bigint  = 903432093492n
// var bigIntVar2  = 1342353243n
var bigIntVar3 = 3

// console.log(bigIntVar + bigIntVar2)

//symbol data type
var SymboData =  Symbol()
var SymboData2 = Symbol()
console.log(SymboData == SymboData2)

console.log(SymboData)
console.log(SymboData2)

const DynamicID = Symbol('id')

const dataObj = {
    [DynamicID] : 1,
    name: "aslam"
}
console.log(dataObj[DynamicID])