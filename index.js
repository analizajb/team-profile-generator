const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');

const promptUser = [
    // Manager Name
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter your team managers name (required)",
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Manager ID
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter your team managers employee ID. (required)",
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Manager email
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter your team managers email address. (required)",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Manager office number
    {
        type: 'input',
        name: 'managerNum',
        message: "Please enter your team managers office number. (required)",
        validate: managerNumInput => {
            if (managerNumInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // MENU: Add an engineer/intern/or finish building team?
    {
        type: 'list',
        name: 'teamBuild',
        message: "Would you like to add an engineer or intern to your team? If not, enter 'Done building team'. (required)",
        choices: 
                 ['Engineer',
                  'Intern',
                  'Done building team'
                 ],
        validate: teamBuildInput => {
            if (teamBuildInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },

// Function to generate prompts into the index.html
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Thank you for your input! Your team roster has been generated.')
    });
};

// Function to initialize HTML file that displays formatted team roster
function init() {
    inquirer.prompt(promptUser)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("dist/index.html", generatePage(userInput));
    });
};

// Function call
init();

// Position title
    // {
    //     type: 'list',
    //     name: 'position',
    //     message: 'What is your positions title? (required)',
    //     choices: 
    //             ['Intern',
    //              'Employee',
    //              'Engineer',
    //              'Manager'],
    //     validate: positionInput => {
    //         if (positionInput) {
    //             return true;
    //         } else {
    //             console.log('This section is required.');
    //             return false;
    //         }
    //     }
    // },