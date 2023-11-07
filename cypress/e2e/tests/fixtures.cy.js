describe('using fixtures', function () {

    beforeEach(function () {

        cy.fixture("user_data").as('user_data')

        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/')
        cy.contains('Login To Restricted Area').click()

    });
    it('successfully logs in', function () {

        cy.get("@user_data").then(passedData => { // using an alias
            cy.login(passedData.username, passedData.password)
        })

        

        cy.get('#right-column').contains('h1', 'Add A Record To the Database').click()
        cy.contains('Log Out').click()
    });


});