describe('Another suite', function () {

    // Cypress.config("defaultCommandTimeout", 12000) // set default timeout (normally 4 secs)

    before(function () {
        cy.log("Runs once for suite")
    });

    beforeEach(function () { 
        cy.log("Runs before each it()")
    });

    after(function () {
        cy.log("Runs once at end of suite")
    });

    afterEach(function () {
        cy.log("Runs after each it()")
    });

    it('Does actions', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get("#textInput").click(10, 20) // x y co-ordinates within the element
        cy.get("input[type=radio]").eq(2).click() 
        // cy.get("input[type=radio]").click({multiple: true}) // one way to click all results
        cy.get("input[type=radio]").each(function(elm, index, list) { // other way to click all (using each)
            if(index != 1) { // how you could skip one
                cy.wrap(elm).click(); // the functions returns a jquery element so need to wrap in a cy.wrap
            }
        })

        cy.get("#textInput").type("{{}Hello World{}}", {delay: 100}) 

        cy.get("input[type=checkbox]").click(); // toggle between on/pff
        cy.get("input[type=checkbox]").uncheck(); // turn off (always)
        cy.get("input[type=checkbox]").check(); // turn on (always)

        cy.get('input[type=radio]').eq(1).check() // can also check radio buttons
        cy.get('input[type=radio]').check(['One','Three']) // check takes a list of values to check (the value tag in the HTML)

        cy.get('#select').select('Selection Two') // takes the value (HTML tag)
        cy.get('#select').select(0) // also takes the index of the selection

    });

    it('Uses the ecommerce dropdown', function () {
        cy.visit("https://www.edgewordstraining.co.uk/demo-site")
        cy.get('#woocommerce-product-search-field-0').type("cap{enter}");
        cy.contains("Add to cart").click();
        cy.get(".widget_shopping_cart").invoke('css', 'left', '0px'); // use css to move an element onto screen
        cy.get(".widget_shopping_cart").contains('View cart').click();
        // cy.get(".widget_shopping_cart").contains('View cart').click({force: true}); // click something even if it's not on screen
    });

    it('Waits', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html')
        cy.get('#delay').clear().type('10')
        cy.contains('a', 'Load Content').click()
        // cy.wait(4000) // thread.sleep... don't do it 
        cy.get('#image-holder > img:nth-child(1)', {timeout: 12000}).click(); // provide more time. If it appears early, it will continue and not wait the full time. (BEST PRACTISE)
    });

  
    it('does assertions', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').type('Hello World')

        // implicit assertions
        cy.get('#textInput').should("have.value", "Hello World") // check value

        cy.get("h1").should("contain", "For") // contains text
        
        cy.get("h1").invoke('text').should("match", /^For/) // invoke and match required to check regex

        cy.get("input[type=radio]").should("have.length", 3) // length of array of elements returned


        // explicit assertions
        cy.get('h1').invoke('text').then(theText => {
            cy.log(`The captured text was: "${theText}"`)
            expect(theText).to.match(/^For/)
            expect(theText).to.equal("Forms")
        })

        
    });


});

