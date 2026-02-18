console.log("In this class we learn about the interface typescript and how to use it on classes");
class Student {
    name;
    rollNo;
    getDetails() {
        console.log("The name of student is " + this.name + "and the Roll Number " + this.rollNo);
    }
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
let firstStudent = new Student("Hasnain", 92039);
console.log(firstStudent);
console.log(firstStudent.getDetails());
class Clock {
    currentDate;
    setTime(d) {
        this.currentDate = d;
    }
    constructor(h, d) {
        this.currentDate = h;
    }
}
let DateTime = new Date;
let ClockData = new Clock(DateTime, 39);
console.log(ClockData);
export {};
//# sourceMappingURL=app.js.map