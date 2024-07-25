const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generatedMarkdown');

// This is the array of questions for the input of user git
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the instructions for installation:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What is the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['BSD 3', 'MIT', 'APACHE 2.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// This is the function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created!')
  );
}

// This is the function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

init();
