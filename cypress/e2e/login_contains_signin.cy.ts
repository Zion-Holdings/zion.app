describe('login page contains Sign In', () => {
  it('shows Sign In text', () => {
    cy.visit('/login');
    cy.contains('Sign In');
  });
});
