/// <reference types="cypress" />

let data = null;

describe('example demo app', () => {

    before(() => {
        //before all
        //cy.visit(Cypress.config('baseUrl'))
        cy.fixture('testData').then((content) => {
            data = content
        })
    })
    
    beforeEach(() => {
        //before Each
        cy.visit(Cypress.config('demoUrl'))
    })

    it('validate dynamic dropdown', () => {
        //cy.visit(Cypress.config('demoUrl'));
        cy.get('#autocomplete').type(data.country)
        cy.get('#ui-id-1 li:nth-child(2)').click()
        cy.get('#autocomplete').should('have.value','India')
    })

    it('validate web table1', () => {
        cy.getLowerCourses(data.lowerThroshold)
    })

    afterEach(() => {
        //after Each
    })

    after(() => {
        //after all
        data = null
    })
})