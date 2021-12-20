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
        //cy.visit(Cypress.config('demoUrl'));
        cy.get('#autocomplete').type('indi')
        cy.get('#ui-id-1 li:nth-child(2)').click()
        cy.get('#autocomplete').should('have.value','India')
    })

    afterEach(() => {
        //after Each
    })

    after(() => {
        //after all
    })
})