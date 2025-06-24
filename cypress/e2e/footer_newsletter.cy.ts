describe('Footer Newsletter Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow a user to subscribe with a valid email', () => {
    // Mock the API response for consistent testing
    cy.intercept('POST', '/api/newsletter', {
      statusCode: 200,
      body: { status: 'subscribed', message: 'Successfully subscribed to newsletter!' },
    }).as('newsletterSubscribe');

    cy.get('input[placeholder="Enter your email"]').type('test@example.com');
    cy.get('form button[type="submit"]').contains('Subscribe').click();

    cy.wait('@newsletterSubscribe'); // Wait for the API call to complete

    // Check for the success toast message
    // Toasts can sometimes be tricky to catch if they disappear quickly.
    // Using a broader container for toasts if available, or checking the body.
    cy.contains('Successfully subscribed to newsletter!').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', '');
  });

  it('should show an inline error for an invalid email', () => {
    cy.get('input[placeholder="Enter your email"]').type('invalid-email');
    cy.get('form button[type="submit"]').contains('Subscribe').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', 'invalid-email');
    // Ensure success message does not appear
    cy.contains('Successfully subscribed to newsletter!').should('not.exist');
  });

  it('should show an inline error for an empty email submission', () => {
    // No API call is made if email is empty client-side
    cy.get('form button[type="submit"]').contains('Subscribe').click();
    cy.contains('Please enter a valid email address.').should('be.visible');
    // Ensure success message does not appear
    cy.contains('Successfully subscribed to newsletter!').should('not.exist');
  });

  it('should show "already subscribed" message if API indicates so', () => {
    cy.intercept('POST', '/api/newsletter', {
      statusCode: 200, // Mailchimp might return 200 even if already subscribed, with a specific body
      body: { status: 'already_subscribed', message: "You're already subscribed to our newsletter!" },
    }).as('newsletterAlreadySubscribed');

    cy.get('input[placeholder="Enter your email"]').type('already@example.com');
    cy.get('form button[type="submit"]').contains('Subscribe').click();

    cy.wait('@newsletterAlreadySubscribed');
    cy.contains("You're already subscribed to our newsletter!").should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', ''); // Email should clear on success
  });

  it('should show a generic error toast if API fails', () => {
    cy.intercept('POST', '/api/newsletter', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('newsletterFail');

    cy.get('input[placeholder="Enter your email"]').type('fail@example.com');
    cy.get('form button[type="submit"]').contains('Subscribe').click();

    cy.wait('@newsletterFail');
    // The component defaults to 'Subscription failed. Please try again.' if data.error is not specific enough
    // or uses data.error. Let's check for the data.error message if provided.
    cy.contains('Internal Server Error').should('be.visible');
    cy.get('input[placeholder="Enter your email"]').should('have.value', 'fail@example.com'); // Email should not clear on error
  });
});
