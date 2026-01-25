console.log("This a typescript code and we practice the typescript in this file");
import inquirer from "inquirer";
import chalk from "chalk";
import fs from 'fs';
async function useDetails() {
    let userData = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your full name"
        },
        {
            name: "email",
            type: "input",
            message: "Enter your full email"
        },
        {
            name: "age",
            type: "input",
            message: "Enter your age"
        },
    ]);
    console.log(userData.name);
    fs.writeFileSync(`${userData.name}.txt`, `The Details of the user ${chalk.blue(userData.name, ' ', userData.email, ' ', userData.age)}`);
}
useDetails();
//# sourceMappingURL=app.js.map