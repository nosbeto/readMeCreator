// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const cases = require('./utils/generateMarkdown.js')
const path = "README.md";



const generateREADME = ({
  title,
  description,
  installation,
  usage,
  credits,
  license,
  contributing,
  tests,
  questions,
}) =>
  `
# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#Questions)

## Installation 

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questions}

`;

inquirer
  .prompt([
    // Q1
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a short description of your application",
      name: "description",
    },
    {
      type: "input",
      message:
        "Provide the instruction for the installation process of your app",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Provide instructions and examples for use. You can edit wih screenshots after the readme.md base has been created",
      name: "usage",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "contributing",
    },
    {
      type: "list",
      message: "Select your license from the below options. Default is empty",
      name: "license",
      choices: ["MIT", "GNU_AGPLv3", "unlicense", "empty"],
      filter(val) {
        return val;
      },
    },
    {
      type: "input",
      message: "write any tests for your application",
      name: "tests",
    },
  ])
  .then((answers) => {
    const retrieveLic = funcLicense(answers.license)
    console.log(retrieveLic)
    // const data = generateREADME(answers);
    // fs.writeFile(path, data, (err) => {
    //   if (err) {
    //     console.log(err.message);
    //   } else {
    //     console.log("data written successfully!");
    //   }
    // })
  })
  ;
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
