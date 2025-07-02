/* eslint-env cypress/globals */
describe('API Health Check', () => {
  it('should return a 200 OK status and correct body for /api/health', () => {
    cy.request('GET', '/api/health')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'ok');
        expect(response.body).to.have.property('timestamp'); // Check if timestamp exists
        // Optional: Check if timestamp is a valid ISO string
        const timestamp = response.body.timestamp;
        if (timestamp) {
          const parsedTime = Date.parse(timestamp);
          expect(parsedTime).to.be.a('number');
          expect(parsedTime).to.be.greaterThan(0);
        }
      });
  });
});
