console.log("In this class we learn about abstract class and how to use it in typescript")

abstract class employeers {
    name: string 
    constructor (name: string){
        this.name = name
    }

    greet(){
        console.log(`Hello , I am ${this.name}`)
    }

   abstract work (): void
}

class Developer extends employeers {
    work(): void {
        console.log(this.name + " is a Developer")
    }
}

let emply1 = new Developer('Hasnain')
emply1.greet()
emply1.work()