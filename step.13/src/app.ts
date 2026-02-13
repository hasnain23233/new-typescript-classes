console.log("Learning nominal typing in TypeScript");

class Student {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

class Details {
    private f_name: string;

    constructor(f: string) {
        this.f_name = f;
    }
}

let employee: Student = new Student("Ali");
console.log(employee.getName());

let fName: Details = new Details("Alam");

// employee = fName; // ❌ Error (Nominal behavior because of private)
