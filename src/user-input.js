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
                console.log("Please enter your name:");
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

const whichEployee = [
    {
        type: 'list',
        name: 'employee-type',
        message: 'What kind of employee would you like to enter?',
        choices: ['Engineer', 'Intern', 'No more team members to enter']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the Engineer's's name:",
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
        name: 'title',
        message: 'Please enter project title:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter project title:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter project description:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application:',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide installation instructions for your application:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your application:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please explain how to use your application:");
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license applies to this project? Please check only one box:',
        choices: ['Apache License 2.0', 'Boost', 'BSD 2-Clause', 'BSD 3-Clause', 'CC0', 'EPL', 'GPL v3', 'GPL v2', 'MIT', 'Mozilla Public License 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput.length <= 1) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for how others can contribute to this project:',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log("Please provide guidelines for how others can contribute to this project:");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your application:',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log("Please instructions on how to test your application:");
                return false;
            }
        }
    }
];

const askQuestions = questions => {
    inquirer.prompt(questions)
    .then;
}

module.exports = {
    questions,
    askQuestions,
};