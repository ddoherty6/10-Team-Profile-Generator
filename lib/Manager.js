const Employee = require('Employee');

Manager.prototype = Object.create(Employee.prototype);

function Manager(officeNumber) {
        this.officeNumber = officeNumber;
}
    
Manager.prototype.getSchool = function() {
        return this.school;
}

Manager.prototype.getRole = function() {
        return "Manager";
}

module.exports = Manager;