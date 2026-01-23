console.log("In this class we learn about the Union in typescript")

let num1 : string = "Hasnain"
console.log(num1)

let num2 : string | number = "Ali"
num2 = 3423
console.log(num2.toString())

type RandomData = number | string | boolean | undefined | null

let myData : RandomData = "Asif"
console.log(myData)
myData = 934
console.log(myData)
myData = true
console.log(myData)
myData = undefined
console.log(myData)
myData = null
console.log(myData)