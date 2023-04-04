const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); // call the parent name, id, email
        this.github = github; // to add the new constructor
    }
    getGithub() { 
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;