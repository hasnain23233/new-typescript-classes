console.log("This is class we learn about object literals")
interface defer {
    name: string
}

interface checker {
    phone : number
}



let user1 : defer = {
    name: "Fahad"
}
let user2 : checker = {
    phone : 473957
}

user1 = user1
user2 = user2

console.log(user1)
console.log(user2)
 
interface personDetails {
    name : string , phone: number , exp : number , conform : boolean
}
interface moreDetails extends personDetails {
    country : string , city: string
}

let tofailEmp : moreDetails = {phone : 8394 , name: "tofail" ,   exp : 5 , conform : true , country: 'pakistan' , city: "Gilgit"}
tofailEmp = {phone : 8394 , name: "tofail" ,   exp : 5 , conform : true,  country: 'pakistan' , city: "Gilgit"}

console.log(tofailEmp)