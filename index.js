// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  // Add other questions as needed based on your requirements
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  // Use inquirer to prompt the user with questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate README content using user answers
      const readmeContent = generateREADME(answers);

      // Write README file
      writeToFile('README.md', readmeContent);

      console.log('README.md successfully generated.');
    })
    .catch((error) => console.error('Error occurred:', error));
}

// Function call to initialize app
init();

// Function to generate README content
function generateREADME(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} License.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email ${data.email}.
`;
}

