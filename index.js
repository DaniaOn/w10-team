
// Dev
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const generateHtml = require('./lib/generateHTML');

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

//intern questions





