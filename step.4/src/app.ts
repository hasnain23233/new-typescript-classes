console.log('In this class we learn about the objects in typescript and how to use them')

const personData = {
    name: "Hasnain Khushi",
    email: "hasnainkhushii@gmail.com",
    phone: 3472934
}
let user: string = personData.name
let userPhone: number = personData.phone
console.log(user , userPhone)

console.log(personData.email)

let studentData :{
    name : string,
    phone : number
}

studentData ={
    name: "Alam",
    phone: 934503
}
console.log(studentData)