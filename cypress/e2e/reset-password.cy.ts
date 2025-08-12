describe('reset password flow', () => {
  it('submits email then resets password', () => {
    cy.intercept('POST', '/auth/forgot-password', { statusCode: 200 }).as('forgot')
    cy.intercept('POST', /\/auth\/reset-password\/.*/, { statusCode: 200 }).as('reset')

    cy.visit('/forgot-password')
    cy.get('input[name="email"]').type('user@example.com')
    cy.contains('Submit').click()
    cy.wait('@forgot')

    cy.visit('/reset-password/uid/token')
    cy.get('input[placeholder="New password"]').type('Password123')
    cy.get('input[placeholder="Confirm password"]').type('Password123')
    cy.contains('Reset Password').click()
    cy.wait('@reset')
    cy.contains('Password updated')
  })
})
