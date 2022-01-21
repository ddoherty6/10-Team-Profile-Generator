const input = require('./src/user-input');
const genHTML = require('./src/html-gen');
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
  

const createData = function(employees) {
    
}

//runs the app
function init() {
    // input.askManagerQuestions()
    // .then(managerObj => {
    //     input.askEmployeeQuestions(managerObj) // pass manager obj into next set of questions
    //     .then(allEmployeeObjs => employees = allEmployeeObjs)
    // })
    // .catch(error => console.log(error));

    employees = mockData;

    // console.log(mockData);

    console.log(mockData[2].name);

    createData(employees);


    // .then(answers => createData(answers)) //creates array of objects from input
    // .then(data => genHTML(data)) // creates HTML from array of employee objects
    // .then(html => createFile(html)) // writes HTML file
    // .then(resolve => console.log(resolve.message))
}


//initialize the app
init();
