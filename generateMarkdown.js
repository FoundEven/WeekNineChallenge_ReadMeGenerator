// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 const mitL = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
 const gnuL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
 const apacheL = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
 const boostS = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
 const gANU = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
 let hold ="";

 if (license === 'Apache license 2.0') {
   hold = apacheL;
 }
 if (license === 'GNU General Public License v3.0') {
   hold = gnuL;
 }
 if (license === 'MIT License') {
   hold = mitL;
 }
 if (license === 'Boost Software License 1.0') {
   hold = boostS;
 }
 if (license === 'GNU Affero General Public License v3.0') {
   hold = gANU;
 }
 return hold;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mit = "https://opensource.org/licenses/MIT";
  const gnu = "https://www.gnu.org/licenses/gpl-3.0";   
  const apache = "https://opensource.org/licenses/Apache-2.0";
  const boost = "https://www.boost.org/LICENSE_1_0.txt";
  const ganu = "https://www.gnu.org/licenses/agpl-3.0";
  let hold ="";

  if (license === 'Apache license 2.0') {
    hold = apache;
  }
  if (license === 'GNU General Public License v3.0') {
    hold = gnu;
  }
  if (license === 'MIT License') {
    hold = mit;
  }
  if (license === 'Boost Software License 1.0') {
    hold = boost;
  }
  if (license === 'GNU Affero General Public License v3.0') {
    hold = ganu;
  }
  return hold;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, licenseL, badge) {
  return `# ${data.project}

${badge}

## Description
  ${data.description}
## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
  ${data.install}
  
## Usage
  
  ${data.usage}

## Contribute
  
  ${data.contribute}
  
## License
  
  [${data.license}](${licenseL})

## Tests

  ${data.test}

## Questions

  Github: (${data.github})

  ${data.email}
  
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseBadge,
} 
