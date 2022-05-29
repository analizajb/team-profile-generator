const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    // Uses input for GitHub username
    getGithub () {
        return this.github;
    }

    // Provides egineer role
    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer;