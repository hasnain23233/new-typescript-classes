console.log("This class we learn about ");
var color;
(function (color) {
    color[color["green"] = 0] = "green";
    color[color["red"] = 1] = "red";
    color[color["yellow"] = 2] = "yellow";
    color[color["blue"] = 3] = "blue"; // intial value start from 0 then +++
})(color || (color = {}));
let color1 = color.red;
console.log(color1);
var colorAsint;
(function (colorAsint) {
    colorAsint[colorAsint["green"] = 3] = "green";
    colorAsint[colorAsint["red"] = 5] = "red";
    colorAsint[colorAsint["yellow"] = 1] = "yellow";
    colorAsint[colorAsint["blue"] = 90] = "blue"; // we assine the random values for them
})(colorAsint || (colorAsint = {}));
let color2 = colorAsint.green + colorAsint.red;
console.log(color2);
var student;
(function (student) {
    student["student"] = "Tofail";
    student["student2"] = "Inayat";
})(student || (student = {}));
let students = student.student2;
console.log(students);
export {};
//# sourceMappingURL=app.js.map