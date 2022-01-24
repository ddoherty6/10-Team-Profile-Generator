const input = require('./src/user-input');
const genHTML = require('./src/html-gen');
const fs = require('fs');
const createFile = require('./src/create-file');

let employees = Array(); // stores employee objects

const mockData = [
    {
      name: 'Brian Epstein',
      id: 1,
      email: 'brian@beatles.mus',
      officeNumber: '9'
    },
    {
      name: 'John Lennon',
      id: 2,
      email: 'john@beatles.mus',
      github: 'walrus'
    },
    {
      name: 'Paul McCartney',
      id: 3,
      email: 'paul@beatles.mus',
      github: 'paulisdead'
    },
    {
      name: 'George Harrison',
      id: 4,
      email: 'george@beatles.mus',
      github: 'harrykrishna'
    },
    {
      name: 'Ringo Starr',
      id: 5,
      email: 'ringo@beatles.mus',
      school: 'Liverpool FC'
    }
  ];

//runs the app
function init() {
    input.askManagerQuestions()
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
