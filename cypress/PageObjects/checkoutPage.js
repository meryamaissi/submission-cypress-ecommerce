class Checkout {
	fillPaymentForm = (cardName, cardNumber, expiryMonth, expiryYear, cvc) => {

		cy.get('[data-qa="name-on-card"]').type(cardName);

		cy.get('[data-qa="card-number"]').type(cardNumber);
		cy.get('[data-qa="expiry-month"]').type(expiryMonth);
		cy.get('[data-qa="expiry-year"]').type(expiryYear);
		cy.get('[data-qa="cvc"]').type(cvc);
	};

}

export default Checkout;