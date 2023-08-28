describe('Test wishlist features', function() {

    beforeEach(() => {
        // Perform setup actions here, such as logging in or preparing data
        cy.visit(Cypress.env('SITE_URL'));
        cy.contains('Sign In').click();
        
        cy.get('#email').type(Cypress.env('USERNAME'));
        cy.get('#pass').type(Cypress.env('PASSWORD'));
        cy.contains('button', 'Sign In').click();
        cy.wait(2000);
    });

    it('Add an item in the wishlist', function() {

        cy.visit(Cypress.env('SITE_URL'));
        cy.get('#ui-id-4').trigger('mouseover');
        cy.get('#ui-id-9').click();
        
        cy.get('.product-image-photo').first().click();
        cy.get('.action.towishlist').first().click();
        cy.wait(5000);
        
        cy.visit(Cypress.env('SITE_URL') + '/wishlist/')
        cy.wait(5000);
        cy.get('.products-grid.wishlist').should('have.length', 1);
    })

    it('Remove an item from the wishlist', function() {
        cy.visit(Cypress.env('SITE_URL'));
        cy.wait(2000);
        cy.get('.action.switch').first().click(); 
        cy.get('.link.wishlist').first().click();
        cy.get('.product-item').first().trigger('mouseover');
        cy.wait(2000);
        cy.get('.btn-remove.action.delete').first().click( {force: true});
        cy.wait(2000);
        cy.get('.products-grid.wishlist').should('have.length', 0);
    })
})
