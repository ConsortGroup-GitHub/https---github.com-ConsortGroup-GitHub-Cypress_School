/// <reference types="cypress"/>
/// <reference types="cypress-downLoadfile"/>


it('File Upload test', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json') //Le nom du fichier à uploader suffit s'il est dans le folder 'fixtures'
})

it('File Download test', () => {
    cy.downloadFile('https://consort-group.com/wp-content/uploads/2023/06/Systeme-u-redimensionne.png','mydownloads','example.jpg')
})
