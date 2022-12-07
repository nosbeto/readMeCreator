const fs = require("fs");
const inquirer = require("inquirer");
const path = "index.html";

const generateHTML = ({username,location,bio,url,gurl}) => 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hi my name is ${username}</p>
    <p>I live in ${location}</p>
    <p>My bio is ${bio}</p>
    <p>my linkedIN profile is ${url}</p>
    <p>my url is this ${gurl}</p>
</body>
</html>
`


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "input",
      message: "where are you located?",
      name: "location",
    },
    {
      type: "input",
      message: "Write down your bio",
      name: "bio",
    },
    {
      type: "input",
      message: "type down your LinkedIn URL",
      name: "url",
    },
    {
      type: "input",
      message: "type down your Github URL",
      name: "gurl",
    },
  ])
  .then((answers) => {
    const data = generateHTML(answers)
    fs.writeFile(path, data, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("data written successfully!");
      }
    });
  });