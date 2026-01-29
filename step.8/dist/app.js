console.log("In this class we learn about the function and how to use them in typescript");
function addNum(params, params2) {
    return params + params2;
}
console.log(addNum(2, 5));
let add1 = function (a, x) {
    return a + x;
};
console.log(add1(2, 6));
let myAdd3 = (a, b) => {
    return a + b;
};
console.log(myAdd3(5, 9));
function green(params) {
    return params("Hello");
}
console.log(green((text) => text));
function numberFun(a) {
    return 403;
}
console.log(numberFun((x) => x));
let totalNumber = numberFun((x) => x);
console.log(totalNumber);
function avoidingFun(a) {
    return a(38);
}
let response = avoidingFun((a) => a);
console.log(response);
export {};
//# sourceMappingURL=app.js.map