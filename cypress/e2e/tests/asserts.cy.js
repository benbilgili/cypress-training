describe('asserts', function () {
    it('check a dynamic value for the correct format', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html')

        cy.get('div[id^=dyn] > span').contains(/^dynid/).should('be.visible');

        cy.get('div[id^=dyn]').find('span').invoke('text').then(theText => {
            cy.log(`The captured text was: "${theText}"`)
            expect(theText).to.have.lengthOf(12)
            // could add regex to ensure it matches pattern
        })
    });
});