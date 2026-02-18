console.log("In this class we learn about the interface typescript and how to use it on classes");
class Student {
    name;
    rollNo;
    getDetails() {
        console.log("The name of student is " + this.name + " and the Roll Number " + this.rollNo);
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
    constructor(h) {
        this.currentDate = h;
    }
}
let DateTime = new Date;
let ClockData = new Clock(DateTime);
console.log(ClockData);
class ClassClock {
    currentData;
    constructor(d, m, y) {
        this.currentData = y;
    }
}
// Static side type
let StaticClock = ClassClock;
// Correct instance creation
let newClock = new StaticClock(7, 30, new Date());
console.log(newClock.currentData);
class StudentDetailsClass {
    name;
    email;
    f_Name;
    constructor(name, email, f_name) {
        this.name = name;
        this.email = email;
        this.f_Name = f_name;
    }
}
let student2 = new StudentDetailsClass("Aslam", 'aslam@gmail.com', "Khan");
console.log(student2);
export {};
//# sourceMappingURL=app.js.map