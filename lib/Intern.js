const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    // Uses input to get school
    getSchool () {
        return this.school;
    }

    // Provides intern role
    getRole () {
        return 'Intern';
    }
}

module.exports = Intern;