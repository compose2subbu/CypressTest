/// <reference types="cypress" />



describe('example demo app', () => {

    before(() => {
        //before all
        //cy.visit(Cypress.config('baseUrl'))
    })
    
    beforeEach(() => {
        //before Each
        cy.visit(Cypress.config('demoUrl'))
    })

    it('validate dynamic dropdown', () => {
        //test
        cy.get('#autocomplete').type('indi')
        cy.get('#ui-id-3').click()
        // cy.get('#autocomplete').text().then((text)=>{
        //     console.log(text)
        // })
        cy.get('#autocomplete').should('have.value','India')
    })

    it('validate radio', () => {
        //test
        cy.get('input[type="radio"][value="radio2"]').check().should('be.checked')
    })

    afterEach(() => {
        //after Each
    })

    after(() => {
        //after all
    })
})