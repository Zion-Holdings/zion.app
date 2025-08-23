/// <reference types="cypress" />

describe('Search autocomplete navigation', () => {
  it('navigates to listing detail when suggestion clicked', () => {
    cy.visit('/');
    cy.get('input[aria-autocomplete="list"]').type('AI Security');
    cy.contains('AI Security Monitoring Suite').click();
    cy.url().should('include','/marketplace/listing/ai-security-16');
    cy.contains('AI Security Monitoring Suite');
  });
}); 