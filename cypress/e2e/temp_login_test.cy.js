/* eslint-env cypress/globals */
describe('Temporary Login Test', () => {
  it('should successfully login via API', () => {
    cy.loginByApi('test@example.com', 'password')
      .then((response) => {
        // Ensure the request within loginByApi was successful
        expect(response.status).to.be.oneOf([200, 201]);
      })
      .should('exist'); // Ensures the loginByApi command itself completes

    // Add an explicit assertion on the localStorage item as a secondary check
    cy.window().its('localStorage.token').should('exist');
  });

  // It's good practice to also test failure, but the primary goal here is success.
  // We can add a test for cy.request failing if needed,
  // but loginByApi already uses cy.request which has its own error handling.
  // The test above will fail if cy.request within loginByApi fails.
});
