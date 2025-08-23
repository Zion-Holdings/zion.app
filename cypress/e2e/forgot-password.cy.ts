/* eslint-env cypress/globals */
describe('Forgot Password Page', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('/forgot-password');
  });

  it('should allow a user to request a password reset and see a success message', () => {
    // Intercept the API call and mock a successful response
    cy.intercept('POST', '/api/auth/forgot', {
      statusCode: 200,
      body: { message: 'If your email address exists in our system, you will receive a password reset link.' },
    }).as('forgotPasswordRequest');

    // Find the email input, type an email, and submit the form
    cy.get('input#email').type('test@example.com');
    cy.get('button[type="submit"]').contains('Send Reset Link').click();

    // Check for loading state (optional, but good to verify)
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('button[type="submit"]').contains('Sending...').should('be.visible');

    // Wait for the API call to complete
    cy.wait('@forgotPasswordRequest');

    // Verify the success message is displayed
    cy.contains('If your email address is registered, you will receive a password reset link shortly.').should('be.visible');

    // Verify the button is re-enabled
    cy.get('button[type="submit"]').should('not.be.disabled');
    cy.get('button[type="submit"]').contains('Send Reset Link').should('be.visible');
  });

  it('should display an error message if the email is not provided (HTML5 validation)', () => {
    // Attempt to submit without typing an email
    cy.get('button[type="submit"]').contains('Send Reset Link').click();

    // Check for the browser's validation message on the input
    // This relies on the input having the 'required' attribute
    cy.get('input#email:invalid').should('be.visible');
    // Note: The exact message and appearance are browser-dependent and might be hard to assert consistently in Cypress.
    // Often, just checking for the :invalid pseudo-class is sufficient for HTML5 validation.
  });


  it('handles server errors without uncaught exceptions', () => {
    const errorStub = cy.stub();
    cy.on('uncaught:exception', errorStub);

    // Intercept the API call and mock an error response
    cy.intercept('POST', '/api/auth/forgot', {
      statusCode: 500,
      body: { message: 'An internal server error occurred. Please try again later.' }, // This is the generic message from our API
    }).as('forgotPasswordError');

    cy.get('input#email').type('error@example.com');
    cy.get('button[type="submit"]').contains('Send Reset Link').click();

    // Check for loading state
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('button[type="submit"]').contains('Sending...').should('be.visible');

    cy.wait('@forgotPasswordError');

    // Verify the error message from the page's error state is displayed
    // The page component itself sets a message like "Failed to send reset link. Please try again." or uses error.message
    // Based on pages/forgot-password.tsx, it uses error.message or 'Failed to send reset link. Please try again.'
    // The API mock returns "An internal server error occurred..." which should be caught and displayed.
    // However, the component's catch block might use a more generic message if err.message is not specific enough for the user.
    // The component's code: setError(err.message || 'Failed to send reset link. Please try again.');
    // So, if the API returns a message in the body, that should be displayed.
    cy.contains('An internal server error occurred. Please try again later.').should('be.visible');

    // Verify the button is re-enabled
    cy.get('button[type="submit"]').should('not.be.disabled');
    cy.get('button[type="submit"]').contains('Send Reset Link').should('be.visible');

    cy.then(() => {
      void expect(errorStub).not.to.have.been.called;
    });
  });

  it('should display a specific client-side error message if the API call fails without a message', () => {
    // Intercept and simulate a network error or an error without a body.message
    cy.intercept('POST', '/api/auth/forgot', {
      forceNetworkError: true, // Simulates a network failure
    }).as('forgotPasswordNetworkError');

    cy.get('input#email').type('networkerror@example.com');
    cy.get('button[type="submit"]').contains('Send Reset Link').click();

    cy.wait('@forgotPasswordNetworkError');

    // The component should display its default error message
    cy.contains('Failed to send reset link. Please try again.').should('be.visible');
    cy.get('button[type="submit"]').should('not.be.disabled');
  });
});
