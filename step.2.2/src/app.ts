console.log('this is a typscript code which the subset of the typescript')
import inquires from 'inquirer';

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
])

console.log(answer)