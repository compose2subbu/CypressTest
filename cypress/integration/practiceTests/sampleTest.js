/// <reference types="cypress" />



describe('example demo app', () => {

    before(() => {
        //before all
        //cy.visit(Cypress.config('baseUrl'))
    })
    
    beforeEach(() => {
        //before Each
        cy.visit(Cypress.config('baseUrl'))
    })

    it('validate checkboxes', () => {
        //test
        cy.get('a[href="/checkboxes"]a').click()
        cy.get('h3').should('have.text','Checkboxes')
        cy.get('input[type="checkbox"]').should('have.length',2)
        cy.get('input[type="checkbox"]').eq(1).uncheck()
        cy.get('input[type="checkbox"]').eq(0).check()
    })

    it('validate dropdown', () => {
        //test
        cy.get('a[href="/dropdown"]a').click()
        cy.get('h3').should('have.text','Dropdown List')
        cy.get('#dropdown').should('be.visible')
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown option:selected').should('have.text','Option 2')
    })

    afterEach(() => {
        //after Each
    })

    after(() => {
        //after all
    })
})