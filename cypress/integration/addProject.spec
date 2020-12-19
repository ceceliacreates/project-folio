/// <reference types="Cypress" />

describe("adds user project to Folio", function () {

    it("logs in and adds a project", function () {
        cy.visit("/");

        // logs in
        cy.contains("SIGN IN").click();
        cy.contains("Sign In to your Folio Account");
        cy.get('[name=email]').click().type("test2@email.com");
        cy.get('[name=password]').click().type("123456");
        cy.get('[data-cy=submit]').click();
        cy.get('[data-cy=logoutButton]');

        cy.get('[data-cy=projectsPage]').click();
        cy.contains("SELECT").click();
        cy.get('[data-cy=addProjectButton]').first().click();
        cy.get('[data-cy=addProjectButton]').last().click();
        cy.get('[data-cy=folioButton]').click()
    })

    it.only("adds a project for review", function () {
        cy.visit("/add");
        cy.intercept('POST', 'https://firestore.googleapis.com').as('firestore')
        cy.get('[data-cy=projectName]').click().type('Cool Project Name');
        cy.get('[data-cy=projectTags]').click({force: true})
        cy.contains('Angular').click()
        cy.contains('HTML').click()
        cy.get('.v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon').click()
        cy.get('[data-cy=projectUrl]').click().type('http://test.com');
        cy.get('[data-cy=projectDescription]').click().type('asdgasldkgnasdflaskdfnasldkfnsdlkfn')
        cy.get('[data-cy=submit]').click()
        cy.wait('@firestore').its('response.statusCode').should('eq', 200)
    })
})