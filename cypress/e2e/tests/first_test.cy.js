describe('first test', function () {
    it('check the website sanity', function () {
        cy.visit("https://www.edgewordstraining.co.uk/demo-site")

        cy.get('#woocommerce-product-search-field-0').type("belt{enter}")
        cy.contains("Add to cart").click()
        cy.get('.woocommerce-message > .button').click()

        cy.get('.quantity > input').click().clear().type(2)

        cy.get('[name="update_cart"]').click()

        

    });
});