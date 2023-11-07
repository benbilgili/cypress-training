describe('template spec', () => {
  it('First cypress test', () => {
    console.log("Start Test")

    cy.visit('https://edgewordstraining.co.uk/demo-site/')
    cy.get('#woocommerce-product-search-field-0').type("cap{enter}");
    cy.contains("Dismiss").click();

    cy.log ('Login Successful')
    cy.log('normal')
    cy.log('**bold**')
    cy.log('_italic_')
    cy.log('[Link text](http://example.com)')
    cy.log('![Logo](http://edgewordstraining.co.uk/training-site/images/site_logo.gif)').then(function() {
      console.log("Acctually at the end)")
    })
    cy.screenshot("Wholepage")
    cy.get("#woocommerce-product-search-field-0").screenshot("searchbox")
  })

  it('Second test', function () {
    cy.visit('https://www.google.com')
    
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')

    cy.origin("https://www.edgewordstraining.co.uk", () => {  // allows you to test across multiple web pages (normally not allowed)
      cy.get('#woocommerce-product-search-field-0').clear().type("cap{enter}");

      cy.visit('https://www.google.com')
    })

    // below commands will auto try and interact with google (first visit)
    cy.get('#L2AGLb > .QS5gu').click(); 
    
  });

  it('Locators', function () {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    cy.get('#woocommerce-product-search-field-0').type('cap{enter}')
    cy.get(".summary ").contains("Add to cart").click();
    cy.get(".summary").find(".single_add_to_cart_button").click(); // dont chain .get (.get then .find is okay)
    cy.get("li.product > a.button").click({multiple: true}); // will try and click all returned (can also use .first()/.last() etc) - .parent() moves you back up a level - .filter() to look for something specific out of multiple items - .eq(1) index(1)
    
    cy.get(".summary").within(function() { // saves typing the same thing over and over. all the code below takes place inside the .summary class element
      cy.get('[id^=quantity]').clear().type("2");
      // cy.contains("add to cart", {matchCase: false}).click()
      cy.contains(/add to cart/i).click() // includes regex (i) means case insensitive
    })
  });
})