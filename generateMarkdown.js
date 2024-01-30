// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  return license === 'MIT' ? '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' : '';
}

// function that returns the license link
function renderLicenseLink(license) {
  return license === 'MIT' ? 'https://opensource.org/licenses/MIT' : '';
}

// function that returns the license section of README
function renderLicenseSection(license) {
  return license === 'MIT' ? `## License

This project is licensed under the [MIT License](${renderLicenseLink(license)}).
` : '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${licenseSection ? '- [License](#license)\n' : ''}  // Include license in TOC only if a license is chosen
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

${data.contributing ? `- [Contributing](#contributing)\n` : ''}

${data.tests ? `- [Tests](#tests)\n` : ''}


## Questions
For additional questions, contact [${data.githubUsername}](https://github.com/${data.githubUsername}) or email ${data.email}.
`;
}

module.exports = generateMarkdown;


