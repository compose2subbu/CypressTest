// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getLowerCourses',(thresholdAmount) => {
    let courses = ""
    cy.get('table#product').eq(0).get('tbody').eq(0).children().get('tr').each(($e1, index, $list) => {
        
        if(!(index === 0)){
            cy.wrap($e1).children().eq(-1).then((courseAmount) => {
                const amt = courseAmount.text()
                console.log(amt)
                if(Number(thresholdAmount) > Number(amt)){
                    cy.wrap($e1).children().eq(1).then((courseName)=>{
                        const courseText = courseName.text()
                        console.log(courseText)
                        courses = courses+','+courseText
                    })
                }
            })
    }})
})