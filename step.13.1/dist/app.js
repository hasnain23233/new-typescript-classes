console.log("In this class class we learn about protected in typescript and how to use them");
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "Hii";
    }
}
class fullDetails extends Student {
    getDetaisl() {
        console.log(this.getName());
    }
}
let Student1 = new fullDetails("Tofail");
console.log(Student1.getDetaisl());
export {};
//# sourceMappingURL=app.js.map