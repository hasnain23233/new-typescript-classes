console.log("In this class we learn about optional parameter");
let dataFetching = (name, email, country) => {
    if (typeof country !== 'undefined') {
        return `Thank you ${name} from ${country} now you was login with this email : ${email}`;
    }
    return `thank you ${name} for login your email is ${email}`;
};
let hasnain = dataFetching("Hasnain", "hasniankhushi@gmail.com", "Gilgit Balistan");
console.log(hasnain);
export {};
//# sourceMappingURL=app.js.map