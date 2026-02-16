console.log("In this class class we learn about protected in typescript and how to use them")

class Student {
    name: string 

    constructor(name: string){
        this.name = name
    }

    protected getName () : string{
        return "Hii"
    }
}

class fullDetails extends Student {
 getDetaisl(){
    console.log(this.getName())
 }
}

let Student1 = new fullDetails("Tofail")
console.log(Student1.getDetaisl())