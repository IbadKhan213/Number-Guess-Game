#! /usr/bin/env node

import inquirer from "inquirer";


const randomNum = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
    {
        type:"number",
        name:"userInput",
        message:"Please guess a number between 1 to 10 : ",
    }
])


if(answer.userInput === randomNum){
    console.log("Congratulations! you guessed right number");
    
} else {
    console.log("You guessed wrong number");
}





