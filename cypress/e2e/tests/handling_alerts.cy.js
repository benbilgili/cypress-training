describe('Handling alerts', function () {
    it('Logs in to the webdriver site', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')

        cy.on("window:alert", function(msg) { // have to create an event listener before action. (what to do in case of an alert/confirm etc)
            console.log(`The alert seen was: ${msg}`)
        })
        cy.login("edgewords", "edgewords123wrong"); // command created in commands.js

        cy.login("edgewords", "edgewords123")

        // Check Logged In
        cy.get("H1").should("have.text", "Add A Record To the Database")

        cy.on("window:confirm", function(msg) {
            return false // false = cancel (remain logged in). true = accept (log out)
        })
        cy.contains('Log Out').click()
    });
});