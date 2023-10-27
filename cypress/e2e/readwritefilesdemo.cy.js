/// <reference types="cypress"/>

before(function() {
    cy.fixture('example.json').as('test_data')
})

it('Read Files using fixture', () => {

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
    
    // cy.log(this.test_data.name)

})

it('Read File using readFile', () => {
    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

it('Write File demo', () => {
    cy.writeFile('sample.txt', 'Hello, I am David !\n')
    cy.writeFile('sample.txt', 'I am learning Cypress !', {flag: 'a+'})
})
