describe('Api testing', () => {

    let authToken = null
    let orderId = null

    before('Create a Token Access', () => {

        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: 'David',
                clientEmail: Math.random().toString(5).substring(2)+"@yopmail.com"
            }
        })
        .then((response) => {
            authToken = response.body.accessToken
            cy.log("My Token is : "+authToken)
            expect(response.status).to.eq(201)
        })
    })

    before('Create a new Order', () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authToken
            },
            body: {
                bookId: 1,
                customerName: 'David'
            }
        })
        .then((response) => {
            orderId = response.body.orderId
            cy.log("My orderId is : "+orderId)
            expect(response.status).to.eq(201)
            expect(response.body.created).to.be.true
        })
    })

    it('Get all orders',() => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+authToken
            },
            cookies: {
                'cookieName': 'mycookie'
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).has.length(1)
            expect(response.body[0].id).to.eq(orderId)
        })
    })
})