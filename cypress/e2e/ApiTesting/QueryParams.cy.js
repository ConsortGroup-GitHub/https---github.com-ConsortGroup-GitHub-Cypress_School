describe('API Reqres Testing', () => {

    const queryParams = {
        page: 2
    }    
    
    it('Passing Query parameters',() => {

        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: queryParams
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.per_page).to.eq(6)
            expect(response.body.data[0].first_name).to.eq('Michael')
            expect(response.body.data[0]).has.property('first_name','Michael')
            expect(response.body.data[0].last_name).to.eq('Lawson')
            expect(response.body.data[1].first_name).to.eq('Lindsay')
            expect(response.body.data[1].last_name).to.eq('Ferguson')
            expect(response.body.data).has.length(6)
        })
    })
})