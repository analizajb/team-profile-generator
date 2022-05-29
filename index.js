// Page creation
const generatePage = require('./src/generate-page');

// Team
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require('process');

// Team array
const team = [];

const managerInput = [
    // Manager Name
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter your team managers name. (required)",
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
        name: 'officeNum',
        message: "Please enter your team managers office number. (required)",
        validate:officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    }

    .then(managerInput => {
        const { name, id, email, officeNum } = managerInput;
        const manager = new Manager (name, id, email, officeNum);

        teamArray.push(manager);
        console.log(manager);
    })
];

const employeeInput = [
    console.log(`
    ================================
    Let's add the rest of your team!
    ================================
    `),

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
    // Employee Name
    {
        type: 'input',
        name: 'empName',
        message: "Please enter your employee's name. (required)",
        validate: empName => {
            if (empName) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Employee ID
    {
        type: 'input',
        name: 'empId',
        message: "Please enter your employee's ID. (required)",
        validate: empId => {
            if (empId) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Employee email
    {
        type: 'input',
        name: 'empEmail',
        message: "Please enter your employee's email. (required)",
        validate: empEmail => {
            if (empEmail) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Employee GitHub
    {
        type: 'input',
        name: 'empGhub',
        message: "Please enter your employee's GitHub username. (required)",
        validate: empGhub => {
            if (empGhub) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Employee School
    {
        type: 'input',
        name: 'empEdu',
        message: "Please enter your employee's school name. (required)",
        validate: empEdu => {
            if (empEdu) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Allowing user to add more to their team
    {
        type: 'confirm',
        
    }
];

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


init();

