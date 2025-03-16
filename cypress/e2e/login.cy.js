import Login from "../PageObjects/loginPage.js";

describe('Login Feature', () => {
	it('should log in successfully', () => {
		const ln = new Login();
		cy.fixture('validaccount').then((testValid) => {
			cy.login(testValid.email, testValid.password);
			//  verify successful login
			cy.get('[href="/logout"]').should('be.visible');
			// verify logged in user 
			ln.verifyLoggedinUsername(testValid.username);
		});
	});

});