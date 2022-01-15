const Employee = require('Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    
    getSchool {
        return this.school;
    }

    getRole {
        return "Manager";
    }

}

module.exports = Manager;