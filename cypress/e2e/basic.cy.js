describe('Sports Culture Website Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct site title and tagline', () => {
    cy.get('h1').contains('Making the world a better place through sports.');
  });

  it('displays the header with site name', () => {
    cy.get('header').contains('Sports Culture');
  });

  it('displays blog posts', () => {
    cy.get('ul li').should('have.length.at.least', 1);
    cy.get('h2').should('exist');
  });

  it('has working post links', () => {
    cy.get('ul li a').first().click();
    cy.url().should('include', '/posts/');
  });

  it('has footer with copyright text', () => {
    cy.get('footer').contains('All rights reserved');
  });
});
