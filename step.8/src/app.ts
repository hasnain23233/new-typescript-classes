console.log("In this class we learn about the function and how to use them in typescript")

function addNum(params:number , params2: number) : number {
    return params + params2
}

console.log(addNum(2  , 5))


let add1 = function (a: number , x : number): number {
    return a + x
}
console.log(add1(2 , 6))


let  myAdd3 : (x : number , y: number) => number = (a : number  ,  b: number) : number=>{
    return a + b
}

console.log(myAdd3(5 , 9))


type greenFunction = (a : string)=> string

function green(params:greenFunction) {
    return params ("Hello")
}
console.log(
    green((text: string) => text)
)


type numberFunciton = (x: number) => number

function numberFun( a : numberFunciton){
    return 403
}
console.log(numberFun((x : number)=> x))
let totalNumber = numberFun((x : number)=> x)
console.log(totalNumber)

type avoidFunction = (a: number) => number

function avoidingFun(a : avoidFunction){
    return a(38)
}

let response = avoidingFun((a : number)=> a)
console.log(response)