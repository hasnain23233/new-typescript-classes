console.log("In this class we learn about the structul typing");
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
    naming() {
        console.log(this.name + " Is best human in the world and he is a best web developer");
    }
}
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(this.name + " is a animal is eating and the age of animal is " + this.age);
    }
}
let human = new Human("Hasnain");
human.naming();
let animal = new Animal("dog", 38);
animal.eat();
console.log(animal.age);
console.log(animal.name);
export {};
//# sourceMappingURL=app.js.map