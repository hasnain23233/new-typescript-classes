console.log("In this class we learn about the rest parameter in typescript and how to use them in programming");
function RestParameter(name, ...RestParameter) {
    console.log(RestParameter);
    return name + " " + RestParameter.join(" ");
}
let user1 = RestParameter("Tofail", "Masruf", "Kamal", "Data");
console.log(user1);
let buildNameFun = function (firstName, ...restName) {
    console.log(restName);
    return firstName + " " + restName.join(" ");
};
console.log(buildNameFun("Kamal", "Arasalan", "mashruf", "Javaid"));
export {};
//# sourceMappingURL=app.js.map