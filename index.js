import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessName",
        type: "number",
        message: "please guess a number",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guesssed wrong number");
}
