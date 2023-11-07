describe('sync', function () {
    it('check image appears', function () {
        cy.visit("https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html")

        cy.get('#delay').clear().type(3);
        cy.contains('a', 'Load Content').click();
        cy.get('#image-holder > img').click();

        cy.contains('a', 'Clear Content').click();

        cy.get('#delay').clear().type(8);
        cy.contains('a', 'Load Content').click();
        cy.get('#image-holder > img', {timeout: 20000}).click();
    });
});