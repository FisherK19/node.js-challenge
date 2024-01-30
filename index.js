// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your description for your project:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter your installations:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How to perform tests:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the steps to contribute:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter your Usage:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'license',
    message: 'Enter your license for this project:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your Github username:',
    validate: validateInput,
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
    validate: validateInput, 
  },
];

// function to validate user input
function validateInput(input) {
  if (input.trim() !== '') {
    return true;
  } else {
    return 'Please enter a valid input.';
  }
}

// function to write README file
function writeToFile(folder, fileName, data) {
  console.log('Folder:', folder);
  console.log('File Name:', fileName);
  console.log('Data:', data);

  // Create the folder if it doesn't exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }

  // Write the README file inside the example folder
  fs.writeFileSync(`${folder}/${fileName}`, data);
}

// function to initialize app
function init() {
  // Use inquirer to prompt the user with questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log('Answers:', answers);

      // Generate README content using user answers
      const readmeContent = generateMarkdown(answers);

      // Write README file to the example folder
      writeToFile('example', 'README.md', readmeContent);

      console.log('README.md successfully generated in the example folder.');
    })
    .catch((error) => console.error('Error occurred:', error));
}

// Function call to initialize app
init();

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${data.contributing ? `- [Contributing](#contributing)\n` : ''}
${data.tests ? `- [Tests](#tests)\n` : ''}
## License
This project is licensed under the ${data.license} License.

## Questions
For additional questions, contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email ${data.email}.
`;
}


// Export the generateMarkdown function
module.exports = generateMarkdown;



