console.log("In this class we learn about default parameter in typescript and how to use it in programming")

function addingName(firstName: string , secondName : string = "Khushi"){
    return firstName + " " + secondName
}
console.log(addingName("Hasnain" , "Ali"))

let newFun = (num1: string , num2: string = "Asif")=>{
    if(num2){
        return num1 +" "+ num2
    }else{
        return num1
    }
}

console.log(newFun("Hasnain" ))