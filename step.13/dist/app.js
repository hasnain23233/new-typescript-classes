console.log("Learning nominal typing in TypeScript");
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Details {
    f_name;
    constructor(f) {
        this.f_name = f;
    }
}
let employee = new Student("Ali");
console.log(employee.getName());
let fName = new Details("Alam");
export {};
// employee = fName; // ❌ Error (Nominal behavior because of private)
//# sourceMappingURL=app.js.map