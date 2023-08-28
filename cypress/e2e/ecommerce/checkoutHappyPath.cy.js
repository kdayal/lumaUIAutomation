describe('Test checkout happy path', function() {

    beforeEach(() => {
        // Perform setup actions here, such as logging in or preparing data
        cy.visit(Cypress.env('SITE_URL'));
        cy.contains('Sign In').click();
        
        cy.get('#email').type(Cypress.env('USERNAME'));
        cy.get('#pass').type(Cypress.env('PASSWORD'));
        cy.contains('button', 'Sign In').click();
    });

    it('Add an item to shopping cart', function() {
        cy.visit(Cypress.env('SITE_URL'));
        cy.wait(2000);

        // search for an item
        cy.fixture('search').then((data) => {
            cy.get('#search').type(data.searchTerm);
        });
        
        cy.get('.action.search').first().click();
        cy.get('.product-image-photo').first().click();

        cy.get('#option-label-size-143-item-167').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#product-addtocart-button').click();
        cy.wait(2000);

        // checkout
        cy.get('.minicart-wrapper').first().click({force: true});
        cy.wait(2000);
        cy.get('#top-cart-btn-checkout').click({force: true});
        cy.wait(10000);

        // add conditional check
        cy.get('#checkout-step-shipping').then(($checkoutElement) => {
            if ($checkoutElement.find('.shipping-address-item.selected-item').length) {
              // if address already exists
              cy.get('.shipping-address-item.selected-item').click();
              cy.get('[data-role="opc-continue"]').click();
              cy.wait(7000);
            } else {
                cy.fixture('address').then((data) => {
                    console.log('Passed data');
                    console.log(data);

                    // when address does not exist
                    cy.get('[name="company"]').type(data.company);
                    cy.get('[name="street\\[0\\]"]').type(data.street0);
                    cy.get('[name="street\\[1\\]"]').type(data.street1);
                    cy.get('[name="city"]').type(data.city);
        
                    cy.get('[name="country_id"]').select(data.country);
                    cy.get('[name="region_id"]').select(data.region);
                    cy.get('[name="postcode"]').type(data.postcode);
                    cy.get('[name="telephone"]').type(data.telephone);

                    // select an element based on data-role attribute
                    cy.wait(7000);
                    cy.get('.button.action.continue.primary').click();
                });
            }
        });
        
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.get('.checkout-success > .actions-toolbar > div.primary > .action').click();
    })
})