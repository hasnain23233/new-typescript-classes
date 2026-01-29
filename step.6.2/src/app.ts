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

function fetchingWebsite(user: userDetails) {
    const userExist = users.find(user => user.email === user.email)
    if (userExist) {
        return "Sorry, check your email or password"
    }

    users.push(user)

    if (user.role === Roles.admin) {
        return `Welcome ${user.name}, you have admin access`
    } 

    return `Welcome ${user.name}, happy coding`

}

console.log(fetchingWebsite(user1))
console.log(fetchingWebsite(user2))
