console.log("In this class we learn about the interface typescript and how to use it on classes")
interface CollageStudent {
    name: string
    rollNo: number
    getDetails(): void
}

class Student implements CollageStudent {
    name: string
    rollNo: number

    getDetails(): void {
        console.log("The name of student is " + this.name + " and the Roll Number " + this.rollNo)
    }
    constructor(name: string , rollNo : number){
        this.name = name
        this.rollNo = rollNo
    }
}

let firstStudent = new Student("Hasnain" , 92039)

console.log(firstStudent)
console.log(firstStudent.getDetails())


interface ClockInterface {
    currentDate : Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentDate: Date
    setTime(d: Date): void {
        this.currentDate = d
    }
    constructor (h: Date ){
        this.currentDate = h
    }
}

let DateTime: Date = new Date
let ClockData = new Clock(DateTime )
console.log(ClockData)


/// In here we learn about the classes static vs instance types

interface ClockStatic {
    new(h: number, m: number, y: Date): ClassClock
}

interface MyClockInterface {
    currentData: Date
}

class ClassClock implements MyClockInterface {
    currentData: Date

    constructor(d: number, m: number, y: Date) {
        this.currentData = y
    }
}

// Static side type
let StaticClock: ClockStatic = ClassClock

// Correct instance creation
let newClock = new StaticClock(7, 30, new Date())

console.log(newClock.currentData)
