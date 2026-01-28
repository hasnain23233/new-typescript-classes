console.log("In this class we learn about the const enums and how to use them in typescript");
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "Admin";
})(Roles || (Roles = {}));
let user1 = {
    name: "Hasnain khushi",
    email: "hasnainkhushi@gmail.com",
    password: "34oouhfs83",
    role: Roles.admin
};
let user2 = {
    name: "Tofail",
    email: "Tofail@gmail.com",
    password: "435234",
    role: Roles.user
};
let users = [];
function fetchingWebsite(params) {
    const userExist = users.find(user => user.email === params.email);
    if (userExist) {
        return "Sorry, check your email or password";
    }
    users.push(params);
    if (params.role === Roles.admin) {
        return `The ${params.name} your access this email ${params.email} you are admin now you edit the website`;
    }
    else {
        return `The ${params.name} your access this email ${params.email} Thanks for login happy coding`;
    }
}
console.log(fetchingWebsite(user1));
console.log(fetchingWebsite(user2));
export {};
//# sourceMappingURL=app.js.map