"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This is a typeScript in this class we learn about modules");
var first_1 = require("./first");
var second_1 = require("./second");
console.log(first_1.default);
console.log(second_1.b, second_1.c);
