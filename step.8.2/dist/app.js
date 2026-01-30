"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("In this class we learn about default parameter in typescript and how to use it in programming");
function addingName(firstName, secondName = "Khushi") {
    return firstName + " " + secondName;
}
console.log(addingName("Hasnain", "Ali"));
let newFun = (num1, num2 = "Asif") => {
    if (!num2) {
        return num1 + " " + num2;
    }
    else {
        return num1;
    }
};
console.log(newFun("Hasnain"));
//# sourceMappingURL=app.js.map