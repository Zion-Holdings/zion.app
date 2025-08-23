// cypress/e2e/signup-auto-login.cy.ts
describe('Signup and Auto-Login Flow', () => {
  it('should register a new user, auto-login, and redirect to marketplace', () => {
    const testTimestamp = Date.now();
    const uniqueEmail = `testuser_${testTimestamp}@example.com`;
    const userName = 'Test User';
    const password = 'Password123!'; // Ensure this meets password strength requirements

    const mockSupabaseUserID = `test-user-id-${testTimestamp}`;

    // Mock the API response for registration
    cy.intercept('POST', '/api/auth/register', (req) => {
      expect(req.body.email).to.equal(uniqueEmail);
      expect(req.body.name).to.equal(userName);
      // Simulate a successful response where email verification is not required
      req.reply({
        statusCode: 201,
        body: {
          user: {
            id: mockSupabaseUserID,
            aud: 'authenticated',
            role: 'authenticated',
            email: uniqueEmail,
            email_confirmed_at: new Date().toISOString(),
            user_metadata: { display_name: userName },
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
          session: {
            access_token: `fake-access-token-${testTimestamp}`,
            refresh_token: `fake-refresh-token-${testTimestamp}`,
            expires_in: 3600,
            token_type: 'bearer',
            user: {
              id: mockSupabaseUserID,
              aud: 'authenticated',
              role: 'authenticated',
              email: uniqueEmail,
              email_confirmed_at: new Date().toISOString(),
              user_metadata: { display_name: userName },
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          },
        },
      });
    }).as('registerRequest');

    // Mock the API response for fetching user details (protected route)
    cy.intercept('GET', '/api/users/me', {
      statusCode: 200,
      body: {
        id: mockSupabaseUserID,
        email: uniqueEmail,
        name: userName,
      },
    }).as('getMeRequest');

    // Visit the signup page
    cy.visit('/signup');

    // Fill out the form
    cy.get('[data-testid="display-name-input"]').type(userName);
    cy.get('[data-testid="email-input"]').type(uniqueEmail);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="confirm-password-input"]').type(password);

    cy.contains('I agree to the')
      .closest('div.space-y-1')
      .prev()
      .find('button[role="checkbox"]')
      .click();

    // Submit the form
    cy.get('[data-testid="create-account-button"]').click();

    // Wait for registration and verify redirection
    cy.wait('@registerRequest');
    cy.url().should('include', '/marketplace');

    cy.getCookie('authToken').should('exist');

    cy.request({
      method: 'GET',
      url: '/api/users/me',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.email).to.eq(uniqueEmail);
      if (response.body.id) { // check if id is returned by /api/users/me
        expect(response.body.id).to.eq(mockSupabaseUserID);
      }
    });
    cy.wait('@getMeRequest');
  });
});
