
// Dev
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const generateHtml = require('./dist/generateHTML');

// engineer questions
const engineerInput = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please input the engineer's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('ERROR! Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input the engineer's email: ",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('ERROR! Please try again!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please input the engineer's gitHub: ",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('ERROR! Please try again!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        team.push(engineer);
        teamPrompt();
    })
}
// manager questions
const managerInputs = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please input the manager's name: ",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please input the manager's ID: ",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }
        }
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please input the manager's Office Number: ",
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }},
    }
];
//intern questions
const internInput = [
    {
        name: 'internName',
        type: 'input',
        message: 'Enter intern\'s name?',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }
        }
    },
    {
        name: 'interEmail',
        type: 'input',
        message: 'Enter intern\'s email?',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }
        }
    },
    {
        name: 'interSchool',
        type: 'input',
        message: 'Enter intern\'s school?',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'ERROR! Please try again!';
            }
        },
    }
];