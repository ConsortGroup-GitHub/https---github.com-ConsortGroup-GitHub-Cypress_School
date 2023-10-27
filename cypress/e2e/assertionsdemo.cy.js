/// <reference types="cypress"/>

it('Assertions Demo', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    // implicit assertions ('should', 'and'):
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn')
        .and('be.visible')
        .and('be.not.disabled')
        .and('be.enabled')

    // explicit assertions ('expect', 'assert'):
    expect(true).to.be.true
    let myName='Nowak'
    expect(myName).to.be.equal('Nowak')

    assert.equal(4, '4', 'NOT EQUAL')
    // assert.strictEqual(4, '4', 'NOT EQUAL')
    assert.isNumber(4)
    // assert.isNumber('4')
})