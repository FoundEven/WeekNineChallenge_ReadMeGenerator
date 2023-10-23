// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const genMark = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];


// TODO: Create a function to write README file
function writeToFile() {

    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Enter a description of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter how to install your project.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Please enter how to use your application.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What is the title of your project?',
            // Am am not sure which licenses you wanted in the list as I did not see any specifications, so I added all the ones from the github licenses dropdown.
            choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please tell other people how they could contribute.',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Write how you other people could test your application.',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter your github username.',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter your email and other ways to get in contact with you.',
            name: 'email',
        },
    ]).then((response) => 

    fs.writeFile('README.md',
    `# ${response.project}

## Description
    ${response.description}
## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
    ${response.install}
    
## Usage
    
    ${response.usage}

## Contribute
    
    ${response.contribute}
    
## License
    
    ${response.license}

## Tests

    ${response.test}

## Questions

    ${response.github}
    ${response.email}
    ` , (err) =>
    err ? console.error(err) : console.log('Success!')
    )
    );



    
}

// TODO: Create a function to initialize app
function init() {

    writeToFile();

}

// Function call to initialize app
init();


//fs.writeFile('README.md', readMeTemp, (err) =>
//err ? console.error(err) : console.log('Success!')
//)