describe('Google Search', () => {
    it('should perform a Google search', () => {
      const searchTerm = 'Cypress.js'; // Replace with the search term you want to use
  
      cy.visit('https://www.google.com');

      // Enter a search term
      cy.get('textarea[name="q"]').type('world best singer');

      // Click the search button
      cy.get('input[name="btnK"]').click({ multiple: true, force: true }); 

      cy.contains('Images').click();

      cy.get('img[jsname="Q4LuWd"]').each(($img, index) => {
        // Click on the image
        cy.wrap($img).click({ multiple: true });

        // Wait for the image preview to open (Adjust the wait time as needed)
        cy.wait(5000);

        // Stop clicking through images after a certain number (e.g., 5)
        if (index === 10) {
          return false;
        }
      })

    });
  });
  