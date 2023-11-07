describe('Using fixtures', function () {

    beforeEach(function () { // getting info from sample data and using it to log in 

        // cy.fixture("logins").then(function(data) {    // reading data from Mocha.Context .this
        //     this.username = data.username; 
        //     this.password = data.password;
        // })

        cy.fixture("logins").as("data") // using an alias
    });
    
    it('Logs in to the webdriver site', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')

        // cy.get('#username').type(this.username) // reading data from Mocha.Context .this
        // cy.get('#password').type(this.password)

        cy.get("@data").then(passedData =>  { // using an alias
            cy.get('#username').type(passedData.username) 
            cy.get('#password').type(passedData.password)
        })


        
        cy.contains('a', "Submit").click();

        // Check Logged In
        cy.get("H1").should("have.text", "Add A Record To the Database")
    });
});