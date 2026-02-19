console.log("In this class we learn about the interface hybrid type in typescript")

interface Counter {
    (num: number): string
    intervel: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (num : number){
        return `started at ${num}` 
    }) as Counter

    counter.intervel = 0;

    counter.reset = function (){
        console.log("Reset the counter")
    }

    return counter
}

let c = getCounter()
console.log(c(19))
c.reset()
c.intervel = 29


/// Here we learn about class as a interface

class point {
    x : number 
    y : number
    constructor (x : number , y : number){
        this.x = x
        this.y = y
    }
}

interface point2 extends point {
    r : number
}

let student : point2 = {x:23 , y:43 , r:5}
console.log(student)