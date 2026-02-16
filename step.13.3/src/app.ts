console.log("In this class we learn about accessor in typescript and how to use them")
class Student {
    private studentAge: number
    name : string

    constructor (age: number  , name: string){
        this.name = name
        this.studentAge = age
    }

    get age() : string{
        return `The age of student is ${this.studentAge}`
    }

    get nameOfStudent() : string{
        return this.name
    }
    set updateNameOfStudent(n: string) {
    if (n && n.trim() !== "") {
        this.name = n;
    } else {
        console.log("Invalid name");
    }
}


    set setAge (n: number) {
        if (n > 0){
            this.studentAge = n
        }else {
            console.log("Invalid age")
        }
    }
}

let student1 = new Student (29 , "Irah")
student1.updateNameOfStudent = "data filter"
student1.setAge = 30
console.log(student1.nameOfStudent)
console.log(student1.age)