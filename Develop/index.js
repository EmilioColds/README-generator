// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your coding proyect?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your proyect.",
  },
  {
    type: "input",
    name: "installation",
    message: "How is your proyect installed?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide a brief statement of how your proyect is used.",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license that your proyect uses:",
    choices: ["MIT", "Apache2.0", "ISC", "None"],
  },
  {
    type: "input",
    name: "contribution",
    message: "How can other devs contribute to your proyect?",
  },
  {
    type: "input",
    name: "testing",
    message: "How's your proyect going to be tested?",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README file generated correctly!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
