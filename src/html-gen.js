function generateCard(employee) {
    
    let startOfCard = `<div class ="card'>
    
        <h3>${employee.name}</h3>
        <h4>$(employee.)
    
    
    `;
    let endOfCard = `</div>`;
    
    if (employee.hasOwnProperty(officeNumber)) { // if object is Manager
        return `
        <div class ="card'>
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Manger</h4>
            </header>
            <div class="card-body">
            
            </div>
        </div>
        `;
    } else if (employee.hasOwnProperty(github)) { // if object is Engineer
        return `
        
        `;
    } else { // if object is Intern
        return `
        
        `;
    }

    
    return `
        <div class ="card"> </div>
    `;

}

function generateHTML(cards) {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>

            ${cards.join(" ")}
        
        </body>
    </html>
`;
}