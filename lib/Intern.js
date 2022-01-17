const Employee = require('../lib/Employee');

function Intern (name, email, id, school) {
    this.name = name;
    this.email = email;
    this.id= id;
    this.school = school;
}

Intern.prototype = Object.create(Employee.prototype);
    
Intern.prototype.getSchool = function() {
    return this.school;
}

Intern.prototype.getRole = function() {
    return "Intern";
}



module.exports = Intern;