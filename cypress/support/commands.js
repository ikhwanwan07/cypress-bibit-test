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

Cypress.Commands.add('login', (name, { cacheSession = true } = {}) => {
    const login = () => {
      cy.visit('https://www.saucedemo.com/')
      cy.xpath('//input[@id="user-name"]').type(name)
      cy.xpath('//input[@id="password"]').type('secret_sauce')
      cy.xpath('//input[@id="login-button"]').click()
    }
    if (cacheSession) {
      cy.session(name, login)
    } else {
      login()
    }
  })
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