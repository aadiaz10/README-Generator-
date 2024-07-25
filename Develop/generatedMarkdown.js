// This function returns a license badge
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '_')}-blue.svg)`;
  }
  return '';
}


// If there is no license it return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}

// This is a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// This function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- ${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions about the repo, contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
