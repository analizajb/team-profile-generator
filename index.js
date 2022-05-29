// Page creation
const generatePage = require('./src/generatePage');

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
            
            .then(managerInput => {
                const { name, id, email, officeNum } = managerInput;
                const manager = new Manager (name, id, email, officeNum);
        
                teamArray.push(manager);
                console.log(manager);
            })
        }

    }

];

const employeeInput = [
    console.log(`
    ================================
    Let's add the rest of your team!
    ================================
    `),

    {
        type: 'list',
        name: 'empRole',
        message: "Would you like to add an engineer or intern to your team? If not, enter 'Done building team'. (required)",
        choices: 
                 ['Engineer',
                  'Intern',
                  'Done building team'
                 ],
        validate: empRoleInput => {
            if (empRoleInput) {
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
        name: 'confirmEmployeeInput',
        message: 'Would you like to add more members to your team?',
        default: false

    }

    .then(employeeData => {
        let { empRole, empName, empId, empEmail, empGhub, empEdu, confirmEmployeeInput } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        
        teamArray.push(employee);

        if (confirmEmployeeInput) {
            return employeeInput(teamArray);
        } else {
            return teamArray;
        }
    })
];


// Function to generate prompts into the index.html
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been generated and is ready to view!");
        }
    })
};

// Function to initialize HTML file that displays formatted team roster
function init() {
    inquirer.prompt(managerInput)
    .then(function (managerInput) {
        console.log(managerInput)
        writeToFile("dist/index.html", generatePage(managerInput));
    });
};


init();

