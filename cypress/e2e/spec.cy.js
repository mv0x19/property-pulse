describe('Links', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Home', () => {
    cy.contains('Home').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
  it('Properties', () => {
    cy.contains('Properties').click();
    cy.url().should('eq', 'http://localhost:3000/properties');
  });
});
