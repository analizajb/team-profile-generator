const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown');

const promptUser = [
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
    // IF ENGINEER IS SELECTED 
    // Engineer Name
    {
        type: 'input',
        name: 'engineerName',
        message: "Please enter your engineer's name. (required)",
        validate: engineerName => {
            if (engineerName) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Engineer ID
    {
        type: 'input',
        name: 'engineerId',
        message: "Please enter your engineer's ID. (required)",
        validate: engineerId => {
            if (engineerId) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Engineer email
    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter your engineer's email. (required)",
        validate: engineerEmail => {
            if (engineerEmail) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Engineer GitHub
    {
        type: 'input',
        name: 'engineerGhub',
        message: "Please enter your engineer's GitHub username. (required)",
        validate: engineerGhub => {
            if (engineerGhub) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    }, 
    // TO DO: TAKE BACK TO MENU
    // WHEN INTERN IS SELECTED
    // Intern Name
    {
        type: 'input',
        name: 'internName',
        message: "Please enter your intern's name. (required)",
        validate: internName => {
            if (internName) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    }, 
    // Intern ID
    {
        type: 'input',
        name: 'internId',
        message: "Please enter your intern's ID. (required)",
        validate: internId => {
            if (internId) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Intern email
    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter your intern's email. (required)",
        validate: internEmail => {
            if (internEmail) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // Intern School
    {
        type: 'input',
        name: 'internEdu',
        message: "Please enter your intern's school name. (required)",
        validate: internEdu => {
            if (internEdu) {
                return true;
            } else {
                console.log('This section is required.');
                return false;
            }
        }
    },
    // TAKE USER BACK TO MENU
    // CONSOLE LOG INPUT WAS GENERATED INTO INDEX FILE
]

// // Function to generate prompts into the index.html
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err)
//             throw err;
//         console.log('Thank you for your input! Your team roster has been generated.')
//     });
// },

// // Function to initialize HTML file that displays formatted team roster
// function init() {
//     inquirer.prompt(promptUser)
//     .then(function (userInput) {
//         console.log(userInput)
//         writeToFile("dist/index.html", generatePage(userInput));
//     });
// },

// // Function call
// init();

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