describe('reset password flow', () => {
  it('submits email then resets password and logs in', () => {
    cy.intercept('POST', '/auth/forgot-password', { statusCode: 200 }).as('forgot')
    cy.intercept('PUT', /\/auth\/reset\/.*/, { statusCode: 200 }).as('reset')
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { token: 'jwt', user: { id: '1', email: 'user@example.com' } },
      headers: { 'set-cookie': 'token=jwt; HttpOnly; Path=/' }
    }).as('login')

    cy.visit('/forgot-password')
    cy.get('input[name="email"]').type('user@example.com')
    cy.contains('Submit').click()
    cy.wait('@forgot')

    cy.visit('/reset-password/token')
    cy.get('input[placeholder="New password"]').type('Password123')
    cy.get('input[placeholder="Confirm password"]').type('Password123')
    cy.contains('Reset Password').click()
    cy.wait('@reset')

    cy.visit('/login')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('Password123')
    cy.contains('Login').click()
    cy.wait('@login')
    cy.url().should('not.include', '/login')
  })
})
