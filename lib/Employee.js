let employeeDatabase = [0];

function Employee(name, email) {
    
    this.name = name;
    this.id = this.getId();
    this.email = email;
    
}
Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function () {
    if (!this.id) { // if id is not truthy, need to create a new unique ID to assign
        return employeeDatabase.length;
    } else {
        return this.id;
    }
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return "Employee";
}

module.exports = Employee;