// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')#


// Add Cypress Grep Plugin
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()







// global hooks - these would run before each test across all files
// before(function () {
//     cy.log(" Global: Runs once for suite")
// });

// beforeEach(function () { 
//     cy.log("Global: Runs before each it()")
// });

// after(function () {
//     cy.log("Global: Runs once at end of suite")
// });

// afterEach(function () {
//     cy.log("Global: Runs after each it()")
// });