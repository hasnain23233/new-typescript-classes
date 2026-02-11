console.log("In this class we learn about structural typing in TypeScript");

// Human class
class Human {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Animal class
class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eat(quantity: number): string {
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
    eat: function (x: number): string {
        return this.name + " is eating in an object literal " + x;
    }
};

console.log(d);

// Structural typing in action

// Human only requires: { name: string }
let human: Human = d;
console.log(human.name);

// Animal requires: { name, age, eat }
let animal: Animal = d;
console.log(animal.name);
console.log(animal.age);
console.log(animal.eat(3));
animal.eat(4)

// Runtime check
console.log(animal instanceof Animal); // false
