import inquirer from "inquirer"
import chalk from "chalk"
import fs from "fs"

console.log("This is a TypeScript code and we practice enums in this file")

const enum Roles {
    USER = "user",
    ADMIN = "admin"
}

type DataChecker = {
    name: string
    email: string
    age: number
    role: Roles
}

const questions = [
    { name: "name", type: "input", message: "Enter your full name" },
    { name: "email", type: "input", message: "Enter your full email" },
    { name: "age", type: "number", message: "Enter your age" },
    { name: "role", type: "list", message: "Select your role", choices: [Roles.USER, Roles.ADMIN] },
]

async function collectUserDetails() {
    const userData = await inquirer.prompt<DataChecker>(questions)

    if (userData.age <= 0) {
        console.log(chalk.red("Invalid age ❌"))
        return
    }

    const fileName = userData.name.replace(/\s+/g, "_")

    const output = `
Name: ${userData.name}
Email: ${userData.email}
Age: ${userData.age}
Role: ${userData.role}
    `

    fs.writeFileSync(`${fileName}.txt`, output)
    console.log(chalk.green("User data saved successfully ✅"))
}

collectUserDetails()
