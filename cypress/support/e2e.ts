import './commands';
import './stripe_mock.js';

Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the error for better debugging
  Cypress.log({
    name: 'Uncaught Exception',
    message: err.message,
    consoleProps: () => {
      return {
        Error: err,
        Runnable: runnable,
      };
    },
  });

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
