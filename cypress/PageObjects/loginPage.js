class LoginPage {
	visit() {
		cy.visit('https://automationexercise.com/login');
	}

	getEmailField() {
		return cy.get('[data-qa="login-email"]');
	}

	getPasswordField() {
		return cy.get('[data-qa="login-password"]');
	}

	getLoginButton() {
		return cy.get('[data-qa="login-button"]');
	}

	login(email, password) {
		this.getEmailField().type(email);
		this.getPasswordField().type(password);
		this.getLoginButton().click();
	}

	verifyLoggedinUsername(username) {
		//cy.get(this.txtLoggedusername).should('have.value', username);
		cy.get("li").find('.fa-user').next().invoke('text').then((text) => {
			expect(text).to.equal(username);
		});
	}
	logoutUser() {
		cy.get('[href="/logout"]').should('be.visible').click();
		cy.get('[href="/login"]').should('be.visible');

	}
}

export default LoginPage;