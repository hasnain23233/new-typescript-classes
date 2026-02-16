console.log("In this class we learn about static property ");
class Student {
    static NameOFCollage = "Govt Degree Collage Gilgit";
    name;
    constructor(name) {
        this.name = name;
    }
    GetingCollageName() {
        console.log(`The student of ${Student.NameOFCollage} is ${this.name}`);
    }
}
class Result extends Student {
    getResult() {
        this.GetingCollageName();
    }
}
let result = new Result("Hasnain Khushi");
result.getResult();
export {};
//# sourceMappingURL=app.js.map