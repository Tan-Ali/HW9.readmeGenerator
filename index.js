const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkDown");

const questions = [

    {
        type: "input",
        name: "username",
        message: "What is your gitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the project:"
    },
    {
        type: "input",
        name: "contents",
        message: "Table of Contents"
    },
    {
        type: "input",
        name: "installation",
        message: "How is the application installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the application used?"
    },
    {
        type: "input",
        name: "license",
        message: "Licensing information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "How many have contributed to the project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Provide example of a test for the project (leave blank if none):"
    },
    {
        type: "input",
        name: "questions",
        message: "Information to be contacted if any questions:"
    },
];

function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generateMarkdown(data), function(error) {
        if (error) {
            console.log(error);
            }
            else {
                console.log("File created!");
            }
    });
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile("readMe.md", answers);
        })
        .catch(error => {
            console.log(error);
            
        });

}

init();
