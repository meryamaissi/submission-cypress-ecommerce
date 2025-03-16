class Signup {
	// Initial signup form
	txtUsername = "[data-qa='signup-name']";
	txtEmail = "[data-qa='signup-email']";
	btnSignup = "[data-qa='signup-button']";

	// main signup form 
	lblFormSignup = "h2.title.text-center";
	titleElem = "[data-qa='title']";
	gender1 = "#id_gender1";
	gender2 = "#id_gender2";
	txtName = "[data-qa='name']";
	txtPassword = "[data-qa='password']";
	txtEmailMainForm = "[data-qa='email']";
	slctDays = "[data-qa='days']";
	slctMonths = "[data-qa='months']";
	slctYears = "[data-qa='years']";
	checkboxNewsletter = "#newsletter";
	checkboxOffert = "#optin";
	//txt = "[data-qa='']";
	txtFirstname = "[data-qa='first_name']";
	txtLastname = "[data-qa='last_name']";
	txtCompany = "[data-qa='company']";
	txtAddress1 = "[data-qa='address']";
	txtAddress2 = "[data-qa='address2']";
	slctCoutry = "[data-qa='country']";
	txtState = "[data-qa='state']";
	txtCity = "[data-qa='city']";
	txtZipcode = "[data-qa='zipcode']";
	txtMobilenumber = "[data-qa='mobile_number']";
	btnCreateaccount = "[data-qa='create-account']";
	btnContinue = "[data-qa='continue-button']";

	//homepage
	txtLoggedusername = "b[xpath='1']";
	linkDeleteaccount = "[href='/delete_account']";

	setUsername(username) {
		cy.get(this.txtUsername).type(username);
	}

	setEmail(email) {
		cy.get(this.txtEmail).type(email);
	}

	clickSignup() {
		cy.get(this.btnSignup).click();
	}

	verifySignupFormlbl(formlbl) {
		cy.get(this.lblFormSignup).should("contain", formlbl);
	}
	checkTitlebtn(gender) {

		// verify visivility
		// verify select Mr.
		cy.get(this.gender1).check().should('be.checked');
		cy.get(this.gender2).should('not.be.checked');

		// verify select Mrs.
		cy.get(this.gender2).check().should('be.checked');
		cy.get(this.gender1).should('not.be.checked');
		// TODO : set dynamically the gender
	}
	// verify username and email prefilled and non editable
	verifyUsernameEmail(username, email) {
		cy.get(this.txtName).should("have.value", username);
		//cy.get(this.txtName).should('be.disabled');
		cy.get(this.txtEmailMainForm).should("have.value", email).and('be.disabled');

	}
	setPassword(password) {
		cy.get(this.txtPassword).should('have.attr', 'type', 'password');
		cy.get(this.txtPassword).type('password');

	}

	//verify and set date of birth
	setDateOfBirth(day, month, year) {
		cy.get(this.slctDays).select(day).should('have.value', day);
		cy.get(this.slctMonths).select(month).should('have.value', month);
		cy.get(this.slctYears).select(year).should('have.value', year);
	}
	setNewsletter() {
		cy.get(this.checkboxNewsletter).check().should('be.checked');
	}

	setSpecialOffert() {
		cy.get(this.checkboxOffert).check().should('be.checked');
	}
	setFirstName(firstname) {
		cy.get(this.txtFirstname).type(firstname);
	}
	setLastName(lastname) {
		cy.get(this.txtLastname).type(lastname);
	}
	setCompany(company) {
		cy.get(this.txtCompany).type(company);
	}
	setAddress1(address1) {
		cy.get(this.txtAddress1).type(address1);
	}
	setAddress2(address2) {
		cy.get(this.txtAddress2).type(address2);
	}
	setCountry(country) {
		cy.get(this.slctCoutry).select(country).should('have.value', country);
	}
	setState(state) {
		cy.get(this.txtState).type(state);
	}
	setCity(city) {
		cy.get(this.txtCity).type(city);
	}
	setZipCode(zipcode) {
		cy.get(this.txtZipcode).type(zipcode);
	}
	setMobileNumber(mobilenumber) {
		cy.get(this.txtMobilenumber).type(mobilenumber);
	}
	clickCreateAccount() {
		cy.get(this.btnCreateaccount).click();
	}
	clickContinueBtn() {
		cy.get(this.btnContinue).click();
	}
	deleteAccount() {
		cy.get(this.linkDeleteaccount).contains(" Delete Account").click();
		//cy.get("h2.title").should("have.text", "Account Deleted!");
		//sn.clickContinueBtn();

	}

	registerUser(username, email, gender, password, day, month, year, firstname, lastname, company, address1, address2, country, state, city, zipcode, mobilenumber) {
		this.checkTitlebtn(gender);
		this.verifyUsernameEmail(username, email);
		this.setPassword(password);
		this.setDateOfBirth(day, month, year);
		this.setNewsletter();
		this.setSpecialOffert();
		this.setFirstName(firstname);
		this.setLastName(lastname);
		this.setCompany(company);
		this.setAddress1(address1);
		this.setAddress2(address2);
		this.setCountry(country);
		this.setState(state);
		this.setCity(city);
		this.setZipCode(zipcode);
		this.setMobileNumber(mobilenumber);
		this.clickCreateAccount();
	}
}

export default Signup;