// cypress/e2e/error_handling.cy.ts

describe('Error Handling', () => {
  let reloadStub: Cypress.Agent<sinon.SinonStub>;

  beforeEach(() => {
    // Stub window.location.reload. Important: use `cy.window()` to ensure it's the app's window.
    cy.window().then((win) => {
      reloadStub = cy.stub(win.location, 'reload').as('reload');
    });

    // It's good practice to intercept and wait for common initial calls if any,
    // for example, an initial data fetch for the marketplace.
    // cy.intercept('GET', '/api/marketplace/items').as('getMarketplaceItems');
  });

  // afterEach(() => {
    // Cypress automatically restores stubs created with cy.stub() on the window object
    // when the test finishes. However, if we were stubbing something on `Cypress.env` or
    // a non-window object, manual restoration might be needed.
    // For window.location.reload, direct restoration via reloadStub.restore() can
    // sometimes cause issues if Cypress is also trying to manage it.
    // Let's rely on Cypress's automatic cleanup for window stubs.
  // });

  it('should load the main page (Marketplace) without fatal errors and no error boundary visible', () => {
    cy.visit('/'); // Assuming '/' is a valid page like Marketplace or Home
    // cy.wait('@getMarketplaceItems'); // Wait for initial data if you intercepted
    cy.contains('Marketplace', { timeout: 20000 }).should('be.visible'); // Increased timeout for initial load

    // Check that our error fallbacks are not visible
    cy.contains("Oops! An Error Occurred").should('not.exist'); // From RootErrorFallback in App.tsx
    cy.contains("Oops! Page Load Error").should('not.exist'); // From GlobalErrorFallback in GlobalErrorBoundary.tsx
    cy.get('body').should('not.contain.text', 'Test error triggered on render');
    cy.get('body').should('not.contain.text', 'Test error triggered on mount');

    // Check console for the "NextRouter not mounted" error.
    // This is tricky because Cypress doesn't fail tests on console.error by default.
    // We are primarily testing that the UI is usable.
    // For now, we'll rely on the UI check. If we could fail on console.error, that would be stronger.
  });

  it('should display the error boundary for a render error and allow page reload', () => {
    cy.visit('/test-error-render');

    // Check for text from one of the error fallbacks
    // It could be GlobalErrorFallback or RootErrorFallback depending on where the error is caught.
    cy.contains(/Oops! (An Error Occurred|Page Load Error)/, { timeout: 10000 }).should('be.visible');
    // Check for the specific error message passed by the error boundary
    cy.contains('Test error triggered on render', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Reload Page').should('be.visible').click();
    cy.get('@reload').should('have.been.calledOnce');
  });

  it('should display the error boundary for an error thrown on mount and allow page reload', () => {
    cy.visit('/test-error-mount');
    cy.contains(/Oops! (An Error Occurred|Page Load Error)/, { timeout: 10000 }).should('be.visible');
    // Check for the specific error message passed by the error boundary
    cy.contains('Test error triggered on mount', { timeout: 10000 }).should('be.visible');
    cy.contains('button', 'Reload Page').should('be.visible').click();
    cy.get('@reload').should('have.been.calledOnce');
  });

  // Optional: Test for the specific "NextRouter not mounted" scenario if reproducible
  // This would require knowing which component/action triggers it from AppKit.
  // For now, the above tests cover the generic error boundary functionality.
});
