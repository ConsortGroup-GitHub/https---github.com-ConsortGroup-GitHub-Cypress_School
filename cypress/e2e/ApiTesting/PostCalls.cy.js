describe('API Testing', () => {

    // it('Approach1 - Hardcoded Json Object', () => {
    //     const requestBody = {
    //         tourist_name: "David3",
    //         tourist_email: "toto3@yopmail.com",
    //         tourist_location: "Fretin"
    //     }
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://restapi.adequateshop.com/api/Tourist/',
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(201)
    //         expect(response.body.tourist_name).to.eq('David3')
    //         expect(response.body.tourist_email).to.eq('toto3@yopmail.com')
    //         expect(response.body.tourist_location).to.eq('Fretin')
    //     })
    // })

    it('Approach2 - Dynamically Generated Json Object', () => {
        const requestBody = {
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+"@yopmail.com",
            tourist_location: "Fretin"
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist/',
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })

    it.skip('Approach3 - Dynamically Generated Json Object', () => {
        
        cy.fixture('tourist').then((myFixtureData) => {
            const requestBody = myFixtureData
            cy.request({
                method: 'POST',
                url: 'http://restapi.adequateshop.com/api/Tourist/',
                body: requestBody
            })
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)

                expect(response.body).has.property('tourist_name',requestBody.tourist_name)
                expect(response.body).has.property('tourist_email',requestBody.tourist_email)
                expect(response.body).has.property('tourist_location',requestBody.tourist_location)

            })
        })
    })
})