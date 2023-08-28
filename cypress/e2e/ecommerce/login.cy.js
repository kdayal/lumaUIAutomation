describe('Login tests', function() {
    it('Successfull login', function() {

        cy.visit(Cypress.env('SITE_URL'));
        cy.contains('Sign In').click();
        
        cy.get('#email').type(Cypress.env('USERNAME'));
        cy.get('#pass').type(Cypress.env('PASSWORD'));
        cy.contains('button', 'Sign In').click();
        cy.wait(2000);
    })

})


