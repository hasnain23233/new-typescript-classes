console.log('In this class we learn about the private modifier in typescript and how to use them in classes');
class emply {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    nameEmp() {
        console.log(this.name);
    }
}
let emply1 = new emply("Hasnain", "Hasniankhushi@gmail.com");
console.log(emply1.nameEmp());
console.log(emply1.email);
export {};
//# sourceMappingURL=app.js.map