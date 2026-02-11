console.log("In this class we learn about the structul typing");
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let human;
let animal = new Animal("dog", 49);
human = animal;
console.log(human.name);
console.log(animal.age);
export {};
//# sourceMappingURL=app.js.map