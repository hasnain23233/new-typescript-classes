console.log("In this class we learn about the overloaded functions in typescript")


function add(arg1: string , arg2: string) : string
function add(arg1 : number , arg2 : number) : number
function add(arg1 : boolean , arg2 : boolean) : boolean

function add(arg1 : any , arg2 : any): any {
    return arg1 + arg2
}

console.log(add(3542 , 34))
console.log(add("Hello ", "World"));
console.log(add(true, false));