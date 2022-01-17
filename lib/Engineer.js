const Employee = require('../lib/Employee.js');

function Engineer(name, email, id, github) {
    this.name = name;
    this.email = email;
    this.id = id;
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);
      
Engineer.prototype.getGithub = function() {
    return this.github;
}

Engineer.prototype.getRole = function() {
    return "Engineer";
}

module.exports = Engineer;