console.log("In this class we learn about class inheritance in typescript how to manage them");
class Student {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    title() {
        console.log(this.name + " is a student and the email is " + this.email);
    }
}
class Details extends Student {
    f_Name;
    phone;
    country;
    city;
    constructor(name, email, f_name, phone, country, city) {
        super(name, email);
        this.f_Name = f_name;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
    getDetails() {
        console.log(this.name + ' is a Doroing employer , Here is his details');
        return {
            name: this.name,
            f_name: this.f_Name,
            email: this.email,
            phone: this.phone,
            country: this.country,
            city: this.city
        };
    }
}
let student1 = new Details("Hasnain", "hasnainkhushii@gmail.com", "Khush Muhammad", 57823764, "pakistan", "Gilgit");
console.log(student1.name);
student1.title();
console.log(student1.getDetails());
export {};
//# sourceMappingURL=app.js.map