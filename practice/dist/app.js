import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
console.log("This is a TypeScript code and we practice enums in this file");
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const questions = [
    { name: "name", type: "input", message: "Enter your full name" },
    { name: "email", type: "input", message: "Enter your full email" },
    { name: "age", type: "number", message: "Enter your age" },
    { name: "role", type: "list", message: "Select your role", choices: [Roles.admin, Roles.user] },
];
async function useDetails() {
    const userData = await inquirer.prompt(questions);
    const output = `
Name: ${userData.name}
Email: ${userData.email}
Age: ${userData.age}
Role: ${userData.role}
    `;
    fs.writeFileSync(`${userData.name}.txt`, output);
    console.log(chalk.green("User data saved successfully ✅"));
}
useDetails();
//# sourceMappingURL=app.js.map