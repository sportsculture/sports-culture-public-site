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

  it('displays navigation menu with Blog and Careers links', () => {
    cy.get('nav').should('exist');
    cy.get('nav a').contains('Blog').should('exist');
    cy.get('nav a').contains('Careers').should('exist');
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

  it('navigates to careers page successfully', () => {
    cy.get('nav a').contains('Careers').click();
    cy.url().should('include', '/careers');
    cy.get('h1').contains('Join Our Team');
  });

  it('careers page displays job listings', () => {
    cy.visit('/careers');
    cy.get('h1').contains('Join Our Team');
    cy.contains('Full-Stack Developer').should('exist');
    cy.contains('Product Designer').should('exist');
    cy.contains('Sports Data Analyst').should('exist');
  });

  it('careers page has working apply button with correct email', () => {
    cy.visit('/careers');
    cy.get('a').contains('Apply Now')
      .should('have.attr', 'href')
      .and('include', 'mailto:mchughson@sportsculture.io');
  });

  it('careers page displays company information', () => {
    cy.visit('/careers');
    cy.contains('About Sports Culture').should('exist');
    cy.contains('Why Join Sports Culture?').should('exist');
    cy.contains('SpinCulture fitness playlist builder').should('exist');
  });
});
