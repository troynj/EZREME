// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;}
  else {return ''}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
  return `\n*[License](#License)`;}
  else {return ''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis application is covered under the ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.lic)
  const license = renderLicenseLink(data.lic)
  renderLicenseSection(data.lic)

 const feedback = 
`# ${data.repo}
${badge}
  
  ## Description
   
  - ${data.motiv}
  - ${data.why}
  - ${data.prblm}
  - ${data.learn}
  
## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)${license}
  - [Badges](#badges)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Tests](#tests)

## Installation

${data.install}
  
## Usage
  
${data.use}
  
## Credits
  
${data.collab}
  
${data.thrdP}
   
## Badges
  
![${data.repo}](https://img.shields.io/github/languages/top/${data.username}/${data.repo})
    
## Features
  
${data.feat}
  
## How to Contribute
  
[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests
  
${data.test}`;

console.log("last", feedback)
return feedback
}

module.exports = generateMarkdown;
