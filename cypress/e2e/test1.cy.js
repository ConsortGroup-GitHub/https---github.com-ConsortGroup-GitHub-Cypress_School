/// <reference types="cypress"/>

it('Login with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="password"]').type('secret_sauce{Enter}') //On simule la touche entrée, au lieu de cliquer sur le bouton Login
    // Custom timeout here:
    cy.get('[data-test="login-button"]', {timeout:5000}).click()
})
