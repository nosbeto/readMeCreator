// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const cases = require('./utils/generateMarkdown.js')
const path = "README_Template.md";


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
},retrieveLic, retrieveLicBadge
) =>
  `
# ${title}
${retrieveLicBadge}

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
${retrieveLic}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}

`;

inquirer
  .prompt([
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
      type: "editor",
      message: `
      Provide the instruction for the installation process of your app

      Summary of steps to use default editor:
      1) Press <enter>
      2) When inside of editor, press <i>
      3) Start typing as usual
      4) When done editing press <esc>
      5) To store your changes type --> :wq

      `,
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
      message: `
      Select your license from the below options. Default is empty and it won't populate anything on this section
      
      NOTE: After your README template has been generated, remember to go the license section and make the appropiate changes if neccesary. 
      Light edits like fullname and year might be necessary
      `,
      name: "license",
      choices: ["MIT", "GNU_AGPLv3", "unlicense", "empty"],
      filter(val) {
        return val;
      },
    },
    {
      type: "editor",
      message: `
      Write any tests for your application
      
      Summary of steps to use default editor:
      1) Press <enter>
      2) When inside of editor, press <i>
      3) Start typing as usual
      4) When done editing press <esc>
      5) To store your changes type --> :wq

      `,
      name: "tests",
    }
  ])
  .then((answers) => {
    // const retrieveEditor = (answers.test1)
    // console.log(retrieveEditor)
    const retrieveLic = funcLicense(answers.license)
    // console.log(retrieveLic)
    const retrieveLicBadge = badgeLicense(answers.license)
    const data = generateREADME(answers,retrieveLic,retrieveLicBadge);
    fs.writeFile(path, data, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("data written successfully!");
      }
    })
  })
  ;