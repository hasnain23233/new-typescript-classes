console.log("In this class we learn about any and unknow types in typescript");
//any in typescript 
//any type allow all types in one varrable like string , number , boolean , undefine
//e.g
let num1 = "TypeScript";
console.log(typeof num1);
num1 = 20;
console.log(typeof num1);
console.log(num1 = num1);
num1 = {
    name: "JavaScript",
    email: "javascript@gmail.com"
};
console.log(num1);
console.log(typeof num1);
function userDetails(params) {
    let userName = params;
    return userName;
}
let user1 = userDetails("Tofail");
console.log(user1);
let websiteUser = {
    id: 2,
    name: "Hasnain",
    email: "hasnainkhushii@gmail.com",
    phone: 8342034,
    country: "Gilgit Baltistan",
    city: "Gilgit"
};
console.log(websiteUser);
//unknow in typeScript
let datafetching;
datafetching = 342;
if (typeof datafetching === 'string') {
    console.log("This is a string data type", datafetching);
}
else {
    console.log("not fetched");
}
//using unknow on asyn functions in typescript
const url = 'https://jsonplaceholder.typicode.com/todos/';
async function dataFetching(params) {
    if (typeof params === 'string') {
        console.log(typeof params);
        const URL = await fetch(params);
        console.log(typeof URL);
        const Response = await URL.json();
        console.log(typeof Response);
        console.log(Response);
    }
    else {
        console.log("Sorry wrong format in API Response");
    }
}
dataFetching(url);
export {};
//# sourceMappingURL=app.js.map