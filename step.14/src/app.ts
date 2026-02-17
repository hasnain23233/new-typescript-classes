console.log("In this class we learn about Interface in typescript")

interface Student {
    Name : string,
    phone: number,
    email: string
}

interface functionInterFace {
    (x: number , y: number): number
}

const user1: Student ={
    Name: "Nihal" ,
    phone: 3923 , 
    email: "nihal@gmail.com"
}
console.log(user1)
console.log(user1.Name)

const data:functionInterFace = (x , y)=>{
    return x + y
}
let fetchingData =  data(43 , 34)
console.log(fetchingData)


//option proptery

interface Data {
    id ?: number
    email ?: string
    desc ?: string 
}


let api : Data = {
    id: 2,
    email: "Data@gmail.com"
}

console.log(api)

let api2: Data = {
    id: 3,
    email: "malsoo@gmail.com",
    desc: "gsfsfysrtysfgsgs"
}
console.log(api2)