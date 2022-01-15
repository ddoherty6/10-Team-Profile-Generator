class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = this.getId();
        this.email = email;
    }

    getName {
        return this.name;
    }

    getId {
        if (!this.id) { // if id is not truthy, need to create a new unique ID to assign
            //how does it create a new unique ID?
        } else {
            return this.id;
        }
    }

    getEmail {
        return this.email;
    }

    getRole {
        return "Employee";
    }

}

module.exports = Employee;