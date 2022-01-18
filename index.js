const input = require('./src/user-input');
const genHTML = require('./src/html-gen');
const createFile = require('./src/create-file');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require()

let answers = Array(); // stores answers from user
let employee = Array(); // stores employee objects

const createData = function(answers) {
    
}

//runs the app
function getUserInput() {
    input.askManagerQuestions()
    .then(managerDetails => {
        managerDetails = [managerDetails]; // set this as array
        input.askEmployeeQuestions(managerDetails) // pass into next line of questions
        .then(allEmployees => answers = allEmployees);
    })
    // .then(answers => createData(answers)) //creates array of objects from input
    // .then(data => genHTML(data)) // creates HTML from array of employee objects
    // .then(html => createFile(html)) // writes HTML file
    // .then(resolve => console.log(resolve.message))
    .catch(error => console.log(error));
}


//initialize the app
getUserInput();
