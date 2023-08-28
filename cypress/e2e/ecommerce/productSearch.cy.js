describe('productSearch feature', function() {

    beforeEach(() => {
        // Perform setup actions here, such as logging in or preparing data
        cy.visit(Cypress.env('SITE_URL'));
        cy.contains('Sign In').click();
        
        cy.get('#email').type(Cypress.env('USERNAME'));
        cy.get('#pass').type(Cypress.env('PASSWORD'));
        cy.contains('button', 'Sign In').click();
    })

    it('Perform search', function() {
        cy.visit(Cypress.env('SITE_URL'));
        cy.get('#search').type('yoga pants');
        cy.get('.action.search').first().click();
        
        cy.get('.product-image-photo').first().click();
        cy.wait(2000);
        cy.get('#option-label-size-143-item-167').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#product-addtocart-button').click();
        //cy.wait(2000);
        cy.get('.minicart-wrapper').first().click();
        //cy.wait(2000);
    });

})
