console.log("In this class we learn about structural typing in TypeScript");
// Human class
class Human {
    name;
    constructor(name) {
        this.name = name;
    }
}
// Animal class
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat(quantity) {
        return this.name + " is eating " + quantity;
    }
}
/*
   Fresh vs Stale Object Concept

   If we directly assign an object literal to a typed variable,
   it is considered a fresh object and strict checking happens.

   If we first store it in a variable and then assign,
   it becomes a stale object and extra properties are allowed.
*/
// Stale object example
let d = {
    name: "Hasnain",
    age: 8,
    eat: function (x) {
        return this.name + " is eating in an object literal " + x;
    }
};
console.log(d);
// Structural typing in action
// Human only requires: { name: string }
let human = d;
console.log(human.name);
// Animal requires: { name, age, eat }
let animal = d;
console.log(animal.name);
console.log(animal.age);
console.log(animal.eat(3));
animal.eat(4);
// Runtime check
console.log(animal instanceof Animal); // false
export {};
//# sourceMappingURL=app.js.map