console.log("In this class we learn about oops in the typescript");
//class basic
class Point {
    x = 0;
    y = 0;
}
const data = new Point();
data.x = 90;
data.y = 930;
console.log(data);
//class with constractor
class emp {
    name;
    phone;
    email;
    constructor() {
        this.name = "hasnain khushi";
        this.phone = 4375034;
        this.email = 'hasnainkhushii@gmail.com';
    }
}
let emp1 = new emp();
console.log(emp1);
//  // Normal signature with defaults
class userData {
    name;
    id;
    constructor(name = "Ali", id = 93) {
        this.name = name;
        this.id = id;
    }
}
let emp2 = new userData();
console.log(emp2.name, emp2.id);
class reUseAbleData {
    name;
    email;
    phone;
    constructor(name = '', email = '', phone = 8) {
        this.name = name,
            this.email = email,
            this.phone = phone;
        console.log("this function " + this.name);
    }
    useAllData() {
        return (`This use name is ${this.name} and the email is ${this.email}. He use this number ${this.phone}`);
    }
}
let user1 = new reUseAbleData("Hasnain", "hasnain@gmail.com", 38493);
console.log(user1.email);
console.log(user1.useAllData());
export {};
//# sourceMappingURL=app.js.map