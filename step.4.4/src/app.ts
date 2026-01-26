console.log('In this class we learn about intersection_types')

interface person {
    name: string ,
    email: string
}
interface moreDetails {
    country: string ,
    city: string
}

type checker = person & moreDetails


let user: checker = {
    name: "Hasnain" ,
    email: "hasnainkhushii@gmail.com",
    country : "Gilgit Baltistan",
    city: "Gilgit"
}
console.log(user)

interface employer {
    name: string , 
    exp: number
}
interface moreDetailsOfEmp extends employer{
    phone: number ,
    id: boolean,
}

let emp : moreDetailsOfEmp = {
    name: "Ali" ,
    exp : 4934 ,
    phone: 342934,
    id: true
}
console.log(emp)