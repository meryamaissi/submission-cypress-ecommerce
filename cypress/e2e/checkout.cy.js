import Checkout from "../PageObjects/checkoutPage.js";


describe('Checkout Process Testing', () => {
	afterEach(() => {
		// Clear cookies and localStorage to ensure test isolation
		cy.clearCookies();
		cy.clearLocalStorage();
	});

	it('valid checkout process', () => {
		cy.fixture('validaccount').then((testValid) => {
			const email = testValid.email;
			const password = testValid.password;

			const cardName = testValid.cardname;
			const cardNumber = testValid.cardnumber;
			const expiryMonth = testValid.expirymonth;
			const expiryYear = testValid.expiryyear;
			const cvc = testValid.cvc;

			cy.login(email, password);

			const checkout = new Checkout();
			//4. Click 'Products' button
			cy.get('[href="/products"]').should('be.visible').click();
			cy.get('.modal-dialog.modal-confirm').should('not.be.visible');

			// TODO : validate product information from API and add dynamically products to cart
			//add product 1 to cart
			cy.addProductToCart('1');
			//click continue shopping button
			cy.get('.modal-footer').find('button').click();
			// add another product
			cy.addProductToCart('2');

			// Click 'View Cart' button 
			cy.get('.modal-body').should('be.visible').find('[href="/view_cart"]').click();
			// verify redirection to view cart page
			cy.url().should('include', '/view_cart');

			//9. Verify both products are added to Cart plus the header
			cy.get('#cart_info_table').find('tr').should('have.length', 3);
			//10. Verify their id
			cy.get('#product-1').should('be.visible');
			cy.get('#product-2').should('be.visible');

			//proceed throw the checkout
			cy.get('.check_out').click();
			// verify redirection to checkout page
			cy.url().should('include', '/checkout');
			// TODO : verify the shipping address
			//click on payment
			cy.get('[href="/payment"]').click();
			cy.url().should('include', '/payment');
			// fill payment form
			checkout.fillPaymentForm(cardName, cardNumber, expiryMonth, expiryYear, cvc);
			//click on pay button
			cy.get('[data-qa="pay-button"]').click();
			// verify redirection to payment done
			cy.url().should('include', '/payment_done');
			// click on continue button 
			cy.get('[data-qa="continue-button"]').click();
		});
	});
	it('verify checkout process anounamous user', () => {

	});
});