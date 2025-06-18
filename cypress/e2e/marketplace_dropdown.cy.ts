/// <reference types="cypress" />

describe('Marketplace dropdown navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows dropdown items when hovering/clicking marketplace and allows navigation', () => {
    // Click the marketplace trigger
    cy.contains('button, a', /Marketplace/i).click();

    // Dropdown should become visible with Categories link
    cy.contains('a', /Categories/i).should('be.visible');

    // Click categories and verify URL change
    cy.contains('a', /Categories/i).click();
    cy.url().should('include', '/categories');
  });
}); 