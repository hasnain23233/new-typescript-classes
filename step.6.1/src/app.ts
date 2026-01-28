console.log("This class we learn about ")

enum color {
    green  , red , yellow , blue // intial value start from 0 then +++
}
let color1 : color = color.red
console.log(color1)

enum colorAsint {
    green = 3 , red = 5 , yellow  = 1 , blue= 90 // we assine the random values for them
}

let color2 : colorAsint = colorAsint.green + colorAsint.red
console.log(color2)

enum student {
    student = "Tofail" , student2 = "Inayat"
}
let students : student = student.student2
console.log(students)

enum userResponse {
    no =1,
    yes = 0
}

let responseFunction = (userMessage: string , userResponse : userResponse) : void =>{
    let user = userMessage  
    let res = userResponse
    console.log(user , res)
}

responseFunction("I am hasnain" ,  userResponse.yes)