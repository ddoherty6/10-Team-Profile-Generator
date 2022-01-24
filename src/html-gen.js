function generateCard(employee) {
    if (employee.hasOwnProperty("officeNumber")) { // if object is Manager
        return `
            <div class="col s12 m6">
                <div class="card hoverable blue-grey darken-1">
                    <div class="card-content white-text">
                        <h5>${employee.getName()}</h5>
                        <span class="card-title">Manager</span>
                        <span>ID: ${employee.getId()}</span>
                    </div>
                    <div class="card-action">
                        <p class="amber-text text-darken-1">Office Number: ${employee.officeNumber}</p>
                        <a href="mailto: ${employee.getEmail()}">Email</a>
                    </div>
                </div>
            </div>
        `;
    } else if (employee.hasOwnProperty("github")) { // if object is Engineer
        return `
            <div class="col s12 m6">
                <div class="card hoverable blue-grey darken-1">
                    <div class="card-content white-text">
                    <h5>${employee.getName()}</h5>
                    <span class="card-title">Engineer</span>
                        <p>ID: ${employee.getId()}</p>
                    </div>
                    <div class="card-action">
                        <p><a href="https://github.com/${employee.getGithub()}">GitHub</a></p>
                        <a href="mailto: ${employee.getEmail()}">Email</a>
                    </div>
                </div>
            </div>
        `;
    } else { // if object is Intern
        return `
            <div class="col s12 m6">
                <div class="card hoverable blue-grey darken-1">
                    <div class="card-content white-text">
                    <h5>${employee.getName()}</h5>
                    <span class="card-title">${employee.getRole()}</span>
                        <span>ID: ${employee.getId()} </span>
                        
                    </div>
                    <div class="card-action">
                        <p class="amber-text text-darken-1">School: ${employee.getSchool()}</p>
                        <a href="mailto: ${employee.getEmail()}">Email</a>
                    </div>
                </div>
            </div>
        `;
    }
}

function createCardsArray(employees) {
    let cards = Array();
    for (let i = 0; i < employees.length; i++) {
        cards.push(generateCard(employees[i]));
    }

    return cards;
}

function generateHTML(cards) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link rel="stylesheet" href="./style.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header class="blue-grey darken-1">
                <h1 class="white-text center-align">My Team</h1>
            </header>
            <div class="row">

            ${cards.join("")}

            </div>
        </body>
    </html>
`;
}

module.exports = {
    createCardsArray,
    generateHTML
}