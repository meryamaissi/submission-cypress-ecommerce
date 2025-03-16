import Signup from "../PageObjects/signupPage.js";
import Login from "../PageObjects/loginPage.js";

describe('Account Registration and Verification Testing', () => {
	beforeEach(() => {
		// Visit the website
		cy.visit('https://automationexercise.com/');
		// Verify that the homepage is loaded successfully by checking the visibility of the body
		cy.get('body').should('be.visible');
		// Click the "Signup / Login" link
		cy.contains('Signup / Login').click();
		cy.url().should('include', '/login');
		// Verify that the "New User Signup!" text is visible on the page
		cy.contains('New User Signup!').should('be.visible');
		cy.get('.signup-form').should('be.visible')
	});

	afterEach(() => {
		// Clear cookies and localStorage to ensure test isolation
		cy.clearCookies();
		cy.clearLocalStorage();
	});

	/*Cypress.on('uncaught:exception', (err, runnable) => {
		cy.log('caught exept :' + err.message);
		return false;
	});*/

	it('Verify registration with valid data', () => {
		const sn = new Signup();
		const ln = new Login();

		cy.fixture('signup').then((testData) => {
			sn.setUsername(testData.name);
			sn.setEmail(testData.email);
			//Click 'Signup' button
			sn.clickSignup();

			// Full Registration Form
			//Verify that 'ENTER ACCOUNT INFORMATION' is visible
			sn.verifySignupFormlbl(testData.signupformlabel);
			sn.registerUser(testData.name, testData.email, 'gender', testData.password, testData.day, testData.month, testData.year, testData.firstname, testData.lastname, testData.company, testData.address1, testData.address2, testData.country, testData.state, testData.city, testData.zipcode, testData.mobilenumber);

			//Verify that 'ACCOUNT CREATED!' is visible
			cy.get('header').should('be.visible')
			cy.title().should("equal", "Automation Exercise - Account Created");
			cy.get("h2.title").should("have.text", "Account Created!")
			//Click 'Continue' button
			sn.clickContinueBtn();
			//Verify that 'Logged in as username' is visible
			ln.verifyLoggedinUsername(testData.name);
			// TODO  : add create user then logout and login
			//logout user and then login
			//ln.logoutUser();
			//login
			//cy.login(testData.email,testData.password);

			// Click 'Delete Account' button
			sn.deleteAccount();
			// Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
			cy.get("h2.title").should("have.text", "Account Deleted!");
			sn.clickContinueBtn();

		});

	});
	it('Verify registration with invalid data', () => {

	});
	it('Verify registration with existing account', () => {

	});
});
