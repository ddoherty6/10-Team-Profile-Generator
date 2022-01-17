const Employee = require('../lib/Employee.js');

function Manager(name, email, id, officeNumber) {
    this.name = name;
    this.id = id + 1;
    this.email = email;
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return "Manager";
}

module.exports = Manager;