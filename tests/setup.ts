import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

// Ensure React Testing Library cleans up and mocks are restored between tests
afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});
