// cypress/e2e/error_handling.cy.ts

describe('Error Handling', () => {
  // No longer need reloadStub for the GlobalErrorBoundary tests,
  // as it uses navigate(0) which doesn't call window.location.reload().
  // If other tests in this file were for different error boundaries that DO use reload,
  // we might need to conditionally apply the beforeEach for those.
  // For now, assuming all tests here will target the GlobalErrorBoundary behavior.

  beforeEach(() => {
    // Optional: Intercept common initial calls if needed for other tests
    // cy.intercept('GET', '/api/marketplace/items').as('getMarketplaceItems');
  });

  it('should load the main page (e.g., Home) without the global error boundary being visible', () => {
    cy.visit('/'); // Visit a known working page
    // cy.wait('@getMarketplaceItems'); // Example: Wait for initial data

    // Check that the global error fallback is not visible
    cy.contains("Oops! Something went wrong.").should('not.exist');
    cy.contains('button', 'Retry').should('not.exist');

    // Ensure some main content is visible to confirm the page loaded correctly
    // This assertion depends on what's on your homepage.
    // For example, if you have a <main> element or a specific heading:
    cy.get('main').should('be.visible'); // Or another selector for main page content
  });

  it('should display global error fallback for a render error and allow retry', () => {
    cy.visit('/test-error-render'); // This page is designed to throw an error

    // Assert that the global error fallback UI is visible
    cy.contains("Oops! Something went wrong.", { timeout: 10000 }).should('be.visible');
    cy.contains('Test error triggered on render', { timeout: 10000 }).should('be.visible'); // Message from ErrorTriggerComponent
    cy.contains('button', 'Retry').should('be.visible').click();

    // After clicking "Retry" (which uses navigate(0)), the page reloads,
    // and ErrorTriggerComponent throws again. So, the fallback should still be visible.
    cy.contains("Oops! Something went wrong.", { timeout: 10000 }).should('be.visible');
    cy.contains('Test error triggered on render', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Retry').should('be.visible');
  });

  it('should display global error fallback for an error thrown on mount and allow retry', () => {
    cy.visit('/test-error-mount'); // This page is designed to throw an error on mount

    // Assert that the global error fallback UI is visible
    cy.contains("Oops! Something went wrong.", { timeout: 10000 }).should('be.visible');
    cy.contains('Test error triggered on mount', { timeout: 10000 }).should('be.visible'); // Message from ErrorTriggerComponent
    cy.contains('button', 'Retry').should('be.visible').click();

    // Similar to the render error, retrying will cause the component to error again on mount.
    cy.contains("Oops! Something went wrong.", { timeout: 10000 }).should('be.visible');
    cy.contains('Test error triggered on mount', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Retry').should('be.visible');
  });
});
