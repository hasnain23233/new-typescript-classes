console.log("In this class we learn about object aliased")

//anonymus
let teacher: {name: string , profile: string} = {
    name: "Zahid",
    profile: "Linkedin"
}

console.log(teacher.name)
console.log(teacher.profile)

//Aliased object Types
type dataTypes = {
    name: string , exp: number , email: string
}

let userData : dataTypes = {
    name: "hasnain khushi",
    exp: 9,
    email: "hasnainkhushii@gmail.com"
}
console.log(userData.email)
console.log(userData.name)
console.log(userData.exp)

//interface
interface Manager {
    name: string , 
    subdirector ?:number // ? using for objection
}

let ManagerData: Manager = {
    name : "Aslam",
}
console.log(ManagerData.name)

interface activeChecker {
    name : string ,
    email: string,
    phone: number,
    CNIC ?: number
}

let emp1 : activeChecker = {
    name: "Ahasmain",
    email: "Aslam@gmail.com",
    phone: 934234,
    CNIC: 93423
}

console.log(emp1)