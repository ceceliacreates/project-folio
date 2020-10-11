/// <reference types="Cypress" />

describe("adds project", function () {

    it("logs in and adds a project", function () {
        cy.visit("/");
        cy.contains("SIGN IN").click();
        cy.contains("Sign In to your Folio Account");
        cy.get('[name=email]').click().type("test2@email.com");
        cy.get('[name=password]').click().type("123456");
        cy.get('[data-cy=submit]').click();
        cy.get('[data-cy=logoutButton]');
        cy.get('[data-cy=projectsPage]').click();
        cy.contains("SELECT").click();
        cy.get('[data-cy=addProjectButton]').first().click();
        cy.wait()
        cy.get('[data-cy=addProjectButton]').last().click();
    })
})