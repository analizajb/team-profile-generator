const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;
    }

    // Provides Manager role
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager;