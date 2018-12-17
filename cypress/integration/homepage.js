describe('Homepage', function () {
    it('should have nav links', function () {
        cy.visit('/');
        cy.get('.navbar-nav a').as('navLinks').should('have.length', 6);
		cy.get('@navLinks').contains('Who We Are');
		cy.get('@navLinks').contains('What We Do');
		cy.get('@navLinks').contains('Our Work');
		cy.get('@navLinks').contains('Careers');
		cy.get('@navLinks').contains('Contact Us');
		cy.get('@navLinks').contains('Blog');
    });
});