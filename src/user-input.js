const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the Team Manager?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter Team  Manager's name:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Team Manager's email",
        validate: input => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                console.log("Please enter a valid email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Team Manager's office number?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter office number");
                return false;
            }
        }
    }
];

const whichEmployee = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Add another employee? What kind of employee would you like to enter?',
        choices: ['Engineer', 'Intern', 'No more employees to enter']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's name:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter employee's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email",
        validate: input => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true;
            } else {
                console.log("Please enter a valid email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter this Engineer's GitHub username:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter GitHub username:");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Intern's name:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter employee's name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email",
        validate: input => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) { // regular expression to validate email
                return true;
            } else {
                console.log("Please enter a valid email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter this Intern's school:",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log("Please enter school:");
                return false;
            }
        }
    }
];

const askManagerQuestions = () => {
    return inquirer.prompt(managerQuestions); // ask questions about team manager
}

const askEmployeeQuestions = employeeDatabase => {
    
    return inquirer.prompt(whichEmployee) // determine which employee is next (or user stop entering)
    .then(res => {
        let { employeeType } = res;

        if (employeeType === 'Engineer') { // if user chose engineer ...
            return inquirer.prompt(engineerQuestions)
            .then(engineerRes => {
               
                employeeDatabase.push(engineerRes);
                
                return askEmployeeQuestions(employeeDatabase);
            });
        } else if (employeeType === 'Intern') { // if user chose Intern ...
            return inquirer.prompt(internQuestions)
            .then(internRes => {
                console.log(internRes);
                employeeDatabase.push(internRes);
                console.log(employeeDatabase);
                return askEmployeeQuestions(employeeDatabase);
            });
        } else {
            return employeeDatabase;
        }
    });
}

module.exports = {
    askManagerQuestions,
    askEmployeeQuestions
};