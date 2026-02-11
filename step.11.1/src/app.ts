console.log("In this class we learn about the structul typing")

class Human {
    name: string

    constructor(name: string){
        this.name = name
    }
}

class Animal {
    name: string
    age: number

    constructor(name: string , age: number){
        this.name = name
        this.age = age
    }
}

let human: Human

let animal = new Animal("dog" , 49)

human = animal
console.log(human.name)
console.log(animal.age)
