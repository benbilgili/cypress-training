describe('mocha hooks', function () {

    beforeEach(function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/')
        cy.contains('Login To Restricted Area').click()
        cy.login('webdriver', 'edgewords123')

    });
    it('successfully logs in', function () {
        cy.get('#right-column').contains('h1', 'Add A Record To the Database').click()
        cy.contains('Log Out').click()
    });

    it('adds an entry', function () {
        // tbc
    });


});