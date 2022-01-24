const input = require('./src/user-input');
const genHTML = require('./src/html-gen');
const fs = require('fs');
const createFile = require('./src/create-file');

//runs the app
function init() {
    input.askManagerQuestions() // ask questions about Manager
    .then(managerObj => {
        input.askEmployeeQuestions(managerObj) // pass manager obj into next set of questions
        .then(allEmployeeObjs => genHTML.createCardsArray(allEmployeeObjs)) // pass array of employee objects into function that generates html cards
        .then(cards => genHTML.generateHTML(cards)) // pass cards html into full page html
        .then(html => { // write full-page html into file dist/index.html
          fs.writeFile('./dist/index.html', html, (err) => {
            if (err) {
              console.log(err);
            }
            else {
              console.log("New HTML file written at dist/index.html")
            }
          })
        })
    })
    .catch(error => console.log(error));
}


//initialize the app
init();
