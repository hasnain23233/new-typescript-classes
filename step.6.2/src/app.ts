console.log("In this class we learn about the const enums and how to use them in typescript")

const enum Roles {
    user = "user",
    admin = "Admin"
}

type userDetails = {
    name?: string,
    email: string,
    password: string,
    role: Roles
}

let user1: userDetails = {
    name: "Hasnain khushi",
    email: "hasnainkhushi@gmail.com",
    password: "34oouhfs83",
    role: Roles.admin
}
let user2: userDetails = {
    name: "Tofail",
    email: "Tofail@gmail.com",
    password: "435234",
    role: Roles.user
}

let users: userDetails[] = []

function fetchingWebsite(params: userDetails) {
    const userExist = users.find(user => user.email === params.email)
    if (userExist) {
        return "Sorry, check your email or password"
    }

    users.push(params)

    if (params.role === Roles.admin) {
        return `The ${params.name} your access this email ${params.email} you are admin now you edit the website`
    } else {
        return `The ${params.name} your access this email ${params.email} Thanks for login happy coding`
    }
}

console.log(fetchingWebsite(user1))
console.log(fetchingWebsite(user2))
