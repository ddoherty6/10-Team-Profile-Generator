const input = require('./src/user-input');
const genHTML = require('./src/html-gen');
const createFile = require('./src/create-file');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require()

let employeeDatabase = Array();

//runs the app
function init() {
    input.askQuestions(input.questions)
    .then(answers => createData(answers)) //creates array of objects from input
    .then(data => genHTML(data)) // creates HTML from array of employee objects
    .then(html => createFile(html)) // writes HTML file
    .then(resolve => console.log(resolve.message))
    .catch(error => console.log(error));
}

//initialize the app
init();