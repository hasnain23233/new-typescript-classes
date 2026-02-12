console.log("In this class we learn about abstract class and how to use it in typescript");
class employeers {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello , I am ${this.name}`);
    }
}
class Developer extends employeers {
    work() {
        console.log(this.name + " is a Developer");
    }
}
let emply1 = new Developer('Hasnain');
emply1.greet();
emply1.work();
export {};
//# sourceMappingURL=app.js.map