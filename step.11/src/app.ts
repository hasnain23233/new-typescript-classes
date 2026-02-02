console.log("In this class we learn about oops in the typescript")

//class basic
class Point {
    x: number = 0;
    y: number = 0
}
const data = new Point()
data.x = 90
data.y = 930
console.log(data)

//class with constractor
class emp{
    name: string ;
    phone: number;
    email: string

    constructor (){
        this.name = "hasnain khushi"
        this.phone = 4375034
        this.email = 'hasnainkhushii@gmail.com'
    }
}
let emp1 = new emp()
console.log(emp1)


//  // Normal signature with defaults

class userData {
    name: string ;
    id: number

    constructor(name= "Ali" , id = 93){
        this.name = name 
        this.id = id
    }
}


interface empData {
    name: string , email: string , phone: number
}
let emp2 = new userData()
console.log(emp2.name , emp2.id)

class reUseAbleData {
    name: string 
    email: string
    phone: number

    constructor(name ='' , email = '' , phone = 8) {
        this.name = name ,
        this.email = email, 
        this.phone = phone
        console.log("this function " + this.name)
    }

    useAllData(){
        return (`This use name is ${this.name} and the email is ${this.email}. He use this number ${this.phone}`)
    }
}
class data2 {
    data: string
    constructor (data = '12 ded'){
        this.data = data
    }
    fetchingDAta(){
        return this.data
    }

}
let user1 = new reUseAbleData("Hasnain" , "hasnain@gmail.com" , 38493)
console.log(user1.email)
console.log(user1.useAllData())

let user2 = user1 instanceof data2
console.log(user2) 