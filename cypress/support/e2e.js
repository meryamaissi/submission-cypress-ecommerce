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

before(() => {
	cy.log('Start by creating a new user');
	//create new valid user 
    // Load the user data from the fixture file
	cy.fixture('validaccount').then((user) => {
							
		        // Define the request payload
		        const requestBody = {
		            name: user.username,
		            email: user.email,
		            password: user.password,
		            title: user.title,
		            birth_date: user.birthdate,
		            birth_month: user.birthmonth,
		            birth_year: user.birthyear,
		            firstname: user.firstname,
		            lastname: user.lastname,
		            company: user.company,
		            address1: user.address1,
		            address2: user.address2,
		            country: user.country,
		            zipcode: user.zipcode,
		            state: user.state,
		            city: user.city,
		            mobile_number: user.mobilenumber
		        };

		        // Send the POST request
		        cy.request({
		            method: 'POST',
		            url: 'https://automationexercise.com/api/createAccount',
		            form: true, // Use form-data for the request
		            body: requestBody
		        }).then((response) => {
		            // Log the response for debugging
		            cy.log(JSON.stringify(response.body));

		            // Assert the response status code
		            expect(response.status).to.equal(200);
		        });
		    });
	});
	
	after(() => {
		cy.log('Finally delete this user');
		// delete this user
	    // Retrieve the user credentials
		cy.fixture('validaccount').then((delUser) => {
				        // Define the request payload
				        const requestBody = {
				            email: delUser.email, 
				            password: delUser.password 
				        };

				        // Send the DELETE request
				        cy.request({
				            method: 'DELETE',
				            url: 'https://automationexercise.com/api/deleteAccount',
				            form: true, 
				            body: requestBody
				        }).then((response) => {
				            // Log the response for debugging
				            cy.log(JSON.stringify(response.body));

				            // Assert the response status code
				            expect(response.status).to.equal(200);

				        });
						});
		
		});
				