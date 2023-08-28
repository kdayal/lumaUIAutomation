describe('create account', function() {
    it('Register a new user', function() {

        cy.visit(Cypress.env('SITE_URL'));
        cy.contains('Create an Account').click();

        cy.fixture('user1').then((data) => {
            // enter details in sign up form
            cy.get('#firstname').type(data.firstname);
            cy.get('#lastname').type(data.lastname);
            cy.get('#email_address').type(data.email); // sedov27854@inkiny.com
            cy.get('#password').type(data.password);
            cy.get('#password-confirmation').type(data.password);

            // click the submit button on 
            cy.contains('button', 'Create an Account').click();
        });
    })
})