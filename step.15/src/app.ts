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