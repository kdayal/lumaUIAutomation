describe('Test to check whether we can browse sites', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.wait(5000);
  })

  it('passes', () => {
    cy.visit('https://google.com')
  })
})