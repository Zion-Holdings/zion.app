describe('API Health Check', () => {
  it('should return a 200 OK status and correct body for /api/health', () => {
    cy.request('GET', '/api/health')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'ok');
        expect(response.body).to.have.property('timestamp'); // Check if timestamp exists
        // Optional: Check if timestamp is a valid ISO string
        if (response.body.timestamp) {
          const parsedTimestamp = Date.parse(response.body.timestamp);
          expect(isNaN(parsedTimestamp)).to.be.false;
        }
      });
  });
});
