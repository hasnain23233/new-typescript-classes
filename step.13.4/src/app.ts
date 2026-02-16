console.log("In this class we learn about static property ")

class Student {
    static NameOFCollage : string = "Govt Degree Collage Gilgit" 
    name: string
    constructor ( name: string){
        this.name = name
    }

    protected GetingCollageName(){
        console.log(`The student of ${Student.NameOFCollage} is ${this.name}`)
    }
}
class Result extends Student {
    getResult (){
        this.GetingCollageName()
    }
}

let result = new Result("Hasnain Khushi")
result.getResult()