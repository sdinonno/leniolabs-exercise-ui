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

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.title().should('eq', 'OrangeHRM')
    cy.get('input[name="username"]')
      .should('be.visible')
      .type(username);
    cy.get('input[name="password"]')
      .should('be.visible')
      .type(password);
    cy.get('.oxd-button')
      .should('be.visible')
      .click();
})

Cypress.Commands.add('addCandidate', (mandatoryData, optionalData = {}) => {
    cy.get('.oxd-button').contains("Add").click();
    cy.get('input[name=firstName]').type(mandatoryData.firstName)
    cy.get('input[name=lastName]').type(mandatoryData.lastName)
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(mandatoryData.email)
    cy.get('button[type=submit]').click()

})

Cypress.Commands.add('clickMenuOption', (option) => {
    cy.get('.oxd-main-menu-item')
      .contains(option)
      .click();
})