console.log('this is a typscript code which the subset of the typescript');
import inquires from 'inquirer';
import chalk from 'chalk';
let answer = await inquires.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email "
    },
    {
        name: "age",
        type: "number",
        message: "Enter your age"
    },
    {
        type: "confirm",
        name: "confirm",
        message: "all Data Enter "
    },
]);
console.log(chalk.blue(answer.age, answer.name, answer.email, answer.confirm));
//# sourceMappingURL=app.js.map