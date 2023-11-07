describe('Using custom commands', function () {
    it('Logs in to the webdriver site', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')

        cy.login("edgewords", "edgewords123"); // command created in commands.js

        // Check Logged In
        cy.get("H1").should("have.text", "Add A Record To the Database")
    });
});