import './commands';

Cypress.on('uncaught:exception', (err) => {
  // Returning false here prevents Cypress from
  // failing the test due to unhandled promise rejections
  // We are seeing "WebSocket closed without opened" from Vite HMR
  // and other unhandled rejections that might be noise.
  // This is a broad catch-all; more specific filtering might be needed.
  if (err.message.includes('WebSocket closed without opened')) {
    return false;
  }
  // Let other unhandled exceptions fail the test
  return true;
});
