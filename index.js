// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const genMark = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
let licenseL = '';
let badge = '';

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
            choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'GNU Affero General Public License v3.0'],
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
    ]).then((data) => {
    
    licenseL = genMark.renderLicenseLink(data.license);
    badge = genMark.renderLicenseBadge(data.license);

    fs.writeFile('README.md', (genMark.generateMarkdown(data, licenseL, badge)) , (err) => {
    err ? console.error(err) : console.log('Success!')
    });

    }
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