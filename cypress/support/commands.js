// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands. (create function here and can call it everywhere)
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import Login from "../e2e/page-object/Login.po"

    
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
const login = new Login()

Cypress.Commands.add('login', () => { 
    cy.visit("https://thinking-tester-contact-list.herokuapp.com/")
    cy.fixture('../fixtures/login-data').then(data =>{
        login.email().type(data.email)
        login.password().type(data.password)
        login.submit().click()
    })
})