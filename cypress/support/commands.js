// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js

import LoginPage from '../PageObjects/loginPage';

Cypress.Commands.add('login', (email, password) => {
	const loginPage = new LoginPage();
	loginPage.visit();
	loginPage.login(email, password);
});

Cypress.Commands.add('addProductToCart', (productId) => {
	// Find the product by its id and click the "Add to Cart" button
	cy.get('[data-product-id="' + productId + '"]').first().click(); // Locate the product element
	//verify modal confirm
	cy.get('.modal-dialog.modal-confirm').should('be.visible');

});