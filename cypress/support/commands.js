Cypress.Commands.add('loginByApi', (email, password) => {
  cy.request('POST', '/auth/login', { email, password }).then((resp) => {
    window.localStorage.setItem('token', resp.body.token)
  })
})
